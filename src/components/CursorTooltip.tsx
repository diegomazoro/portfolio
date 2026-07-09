"use client";

import { useEffect, useRef, useState } from "react";

const CHAR_DELAY_MS = 18;
const LERP = 0.07;

export default function CursorTooltip() {
  const [visible, setVisible]     = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [pos, setPos]             = useState({ x: 0, y: 0 });

  const fullText      = useRef("");
  const charIndex     = useRef(0);
  const typeTimer     = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const currentTarget = useRef<Element | null>(null);
  const mouseX        = useRef(0);
  const mouseY        = useRef(0);
  const smoothX       = useRef(0);
  const smoothY       = useRef(0);
  const rafId         = useRef<number | undefined>(undefined);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      matchMedia("(pointer: coarse)").matches ||
      window.innerWidth <= 768;

    if (isTouch) return;

    smoothX.current = window.innerWidth / 2;
    smoothY.current = window.innerHeight / 2;
    mouseX.current  = smoothX.current;
    mouseY.current  = smoothY.current;

    function animLoop() {
      smoothX.current += (mouseX.current - smoothX.current) * LERP;
      smoothY.current += (mouseY.current - smoothY.current) * LERP;
      setPos({ x: smoothX.current, y: smoothY.current });
      rafId.current = requestAnimationFrame(animLoop);
    }

    function tick() {
      if (charIndex.current < fullText.current.length) {
        charIndex.current++;
        setDisplayed(fullText.current.slice(0, charIndex.current));
        typeTimer.current = setTimeout(tick, CHAR_DELAY_MS);
      }
    }

    function startTyping(text: string) {
      clearTimeout(typeTimer.current);
      fullText.current    = text;
      charIndex.current   = 0;
      setDisplayed("");
      setVisible(true);
      tick();
    }

    function hide() {
      clearTimeout(typeTimer.current);
      setVisible(false);
      setDisplayed("");
      currentTarget.current = null;
    }

    function onMouseMove(e: MouseEvent) {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      const el = (e.target as Element)?.closest?.("[data-tooltip]") ?? null;

      if (el !== currentTarget.current) {
        currentTarget.current = el;
        el ? startTyping((el as HTMLElement).dataset.tooltip!) : hide();
      }
    }

    rafId.current = requestAnimationFrame(animLoop);
    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", hide);

    return () => {
      clearTimeout(typeTimer.current);
      cancelAnimationFrame(rafId.current!);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  if (!visible || !displayed) return null;

  const offset   = 20;
  const estWidth = displayed.length * 8.5 + 32;
  const cx = Math.min(pos.x + offset, window.innerWidth - estWidth - 8);
  const cy = pos.y + offset;

  return (
    <div
      className="pointer-events-none fixed z-[9999] text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white text-black shadow-md tracking-wide whitespace-nowrap"
      style={{ left: cx, top: cy }}
    >
      {displayed}
    </div>
  );
}
