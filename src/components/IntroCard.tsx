"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const ANIM_MS = 600;
const EASE = "cubic-bezier(0.34, 1.1, 0.64, 1)";
const TRANSITION = `left ${ANIM_MS}ms ${EASE}, top ${ANIM_MS}ms ${EASE}, width ${ANIM_MS}ms ${EASE}, height ${ANIM_MS}ms ${EASE}, border-radius ${ANIM_MS}ms ease`;

export default function IntroCard() {
  const [expanded, setExpanded] = useState(false);
  const [settled, setSettled] = useState(false);
  const [closing, setClosing] = useState(false);

  const cardRef    = useRef<HTMLDivElement>(null);
  const startRect  = useRef<DOMRect | null>(null);
  const closingRef = useRef(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Scroll lock
  useEffect(() => {
    if (expanded) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const close = useCallback(() => { // eslint-disable-line react-hooks/exhaustive-deps
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    setSettled(false);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setExpanded(false);
      setClosing(false);
      closingRef.current = false;
      startRect.current = null;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }, ANIM_MS + 20);
  }, []);

  // Escape key
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, close]);

  function open() {
    if (expanded || !cardRef.current) return;
    startRect.current = cardRef.current.getBoundingClientRect();
    closingRef.current = false;
    setExpanded(true);
    setSettled(false);
    setClosing(false);
    // Double rAF: let the start-rect state paint before triggering the transition
    requestAnimationFrame(() => requestAnimationFrame(() => setSettled(true)));
  }

  function overlayStyle(): React.CSSProperties {
    if (!startRect.current) return {};
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;
    const targetW = Math.min(680, vpW - 48);
    const targetH = Math.min(vpH * 0.85, 700);
    const targetL = Math.max(24, (vpW - targetW) / 2);
    const targetT = Math.max(24, (vpH - targetH) / 2);

    const base: React.CSSProperties = {
      position: "fixed",
      zIndex: 60,
      background: "#18181b",
      overflow: "hidden",
    };

    if (!settled || closing) {
      return {
        ...base,
        left:         startRect.current.left,
        top:          startRect.current.top,
        width:        startRect.current.width,
        height:       startRect.current.height,
        borderRadius: "16px",
        transition:   "none",
      };
    }
    return {
      ...base,
      left:         targetL,
      top:          targetT,
      width:        targetW,
      height:       targetH,
      borderRadius: "20px",
      transition:   TRANSITION,
    };
  }

  return (
    <>
      {/* ── Collapsed card ── */}
      <div
        ref={cardRef}
        onClick={open}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && open()}
        aria-label="Click to learn more about Diego"
        data-tooltip="Click to learn more about me"
        className={`relative cursor-pointer rounded-2xl bg-[#18181b] border border-[#27272a] p-6 hover:border-[#6366f1]/50 transition-all duration-200 select-none ${expanded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {/* Expand icon */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#27272a] flex items-center justify-center text-[#71717a]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gradient-to-br from-[#6366f1] to-[#a78bfa] flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <div>
            <p className="text-white font-medium mb-1">Hey 👋</p>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              I'm Diego — an AI-pilled PM with 10+ years building products from 0&nbsp;to&nbsp;1.
            </p>
          </div>
        </div>
      </div>

      {/* ── Expanded overlay ── */}
      {expanded && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-50 transition-opacity duration-300"
            style={{
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(10px)",
              opacity: closing ? 0 : 1,
            }}
            onClick={close}
          />

          {/* Modal card — FLIP animated */}
          <div style={overlayStyle()}>
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#27272a] flex items-center justify-center text-[#71717a] hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Scrollable bio */}
            <div className="h-full overflow-y-auto px-8 pt-12 pb-10">
              <div className="max-w-lg mx-auto">
                <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-gradient-to-br from-[#6366f1] to-[#a78bfa] flex items-center justify-center text-white font-bold text-2xl">
                  D
                </div>

                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#6366f1] text-center mb-6">
                  About me
                </p>

                <div className="space-y-4 text-[#a1a1aa] text-sm leading-relaxed">
                  <p>
                    I'm Diego Mazo — a product leader with 10+ years turning ambiguous ideas into
                    shipped products. I've co-founded 2 startups and led product across fintech,
                    edtech, and consumer apps.
                  </p>
                  <p>
                    My superpower is the 0-to-1 phase: when the problem is fuzzy, the team is
                    small, and the stakes are high. I think in systems, align fast, and obsess
                    over the details that make users stay.
                  </p>
                  <p>
                    Lately I've gone deep on AI — not just using it, but building with it. I
                    believe AI is reshaping how products are built, and every project I take on
                    has AI at its core. Hence the "AI-pilled PM" label — I wear it proudly.
                  </p>
                  <p>
                    I've shipped across web, mobile, data pipelines, and design systems. I
                    collaborate closely with engineers and designers, and I'm hands-on enough
                    to prototype my own ideas when needed.
                  </p>
                  <p>
                    When I'm not building, I'm reading about systems thinking, following AI
                    research, or studying how the best product teams operate at speed.
                  </p>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="#contact"
                    onClick={close}
                    className="px-5 py-2.5 bg-[#6366f1] text-white text-xs font-semibold tracking-[0.08em] uppercase rounded-lg hover:bg-[#818cf8] transition-colors"
                  >
                    Get in touch
                  </a>
                  <a
                    href="https://www.linkedin.com/in/diego-mazo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-[#27272a] text-[#a1a1aa] text-xs font-semibold tracking-[0.08em] uppercase rounded-lg hover:border-[#6366f1] hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
