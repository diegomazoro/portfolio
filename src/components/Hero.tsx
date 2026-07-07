const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E";

const cards = [
  {
    id: "a",
    label: "Product Builder",
    animClass: "animate-float-1",
    position: "top-[10%] left-[6%]",
    size: "w-44 h-56 md:w-52 md:h-64",
    bg: "linear-gradient(145deg, #2a1f3d 0%, #4a2060 40%, #7c3aed 100%)",
    grainOpacity: "0.35",
  },
  {
    id: "b",
    label: "Designer",
    animClass: "animate-float-2",
    position: "top-[6%] right-[10%]",
    size: "w-36 h-48 md:w-44 md:h-56",
    bg: "linear-gradient(155deg, #1a0f0a 0%, #7a2010 50%, #fe7141 100%)",
    grainOpacity: "0.4",
  },
  {
    id: "c",
    label: "Full Stack",
    animClass: "animate-float-3",
    position: "top-[42%] right-[5%]",
    size: "w-32 h-40 md:w-40 md:h-52",
    bg: "linear-gradient(130deg, #0f1a2a 0%, #1a3a5c 50%, #2563eb 100%)",
    grainOpacity: "0.3",
  },
  {
    id: "d",
    label: "Available",
    animClass: "animate-float-4",
    position: "top-[30%] left-[3%]",
    size: "w-28 h-36 md:w-36 md:h-44",
    bg: "linear-gradient(160deg, #1f2a1a 0%, #2d5a20 50%, #cdabfe 100%)",
    grainOpacity: "0.38",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#09090b]">
      {/* Fluid gradient blobs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 70% at 12% 35%, rgba(124,58,237,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 45% 55% at 78% 18%, rgba(254,113,65,0.18) 0%, transparent 60%),
            radial-gradient(ellipse 60% 45% at 88% 72%, rgba(205,171,254,0.12) 0%, transparent 55%),
            radial-gradient(ellipse 35% 35% at 48% 88%, rgba(37,99,235,0.14) 0%, transparent 50%)
          `,
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{ backgroundImage: `url("${GRAIN_SVG}")`, backgroundRepeat: "repeat" }}
      />

      {/* Floating cards — hidden on small screens to avoid clutter */}
      <div className="hidden md:block">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`absolute ${card.position} ${card.size} ${card.animClass}`}
          >
            {/* Card face */}
            <div
              className="relative w-full h-full rounded-[3px] shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              style={{ background: card.bg }}
            >
              {/* Grain on each card */}
              <div
                className="absolute inset-0 rounded-[3px]"
                style={{
                  backgroundImage: `url("${GRAIN_SVG}")`,
                  backgroundRepeat: "repeat",
                  opacity: card.grainOpacity,
                  mixBlendMode: "overlay",
                }}
              />
            </div>
            {/* Label tag */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[9px] font-semibold tracking-[0.18em] uppercase bg-white text-black px-2.5 py-1 shadow-sm">
                {card.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Hero content — editorial bottom-left layout */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end px-6 md:px-14 pb-14 pt-28">
        <div className="max-w-3xl">
          <h1
            className="font-bold text-white mb-8"
            style={{
              fontSize: "clamp(3rem, 9vw, 7.5rem)",
              letterSpacing: "-0.04em",
              lineHeight: "0.92",
            }}
          >
            I&apos;m Diego.
            <br />
            AI-pilled PM.
          </h1>

          <p
            className="text-white/45 max-w-xs mb-10 leading-relaxed"
            style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", letterSpacing: "0.01em" }}
          >
            Diego Mazo — product builder across web,
            <br />
            mobile, data, and design.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black text-xs font-semibold tracking-[0.1em] uppercase hover:bg-white/90 transition-colors"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/15 text-white/60 text-xs font-semibold tracking-[0.1em] uppercase hover:border-white/40 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Stats — bottom right */}
        <div className="absolute bottom-14 right-6 md:right-14 flex gap-8 text-right">
          {[
            { label: "Projects shipped", value: "20+" },
            { label: "Years building", value: "5+" },
            { label: "Domains", value: "4" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                className="font-bold text-white"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", letterSpacing: "-0.03em" }}
              >
                {stat.value}
              </p>
              <p className="text-[9px] tracking-[0.12em] uppercase text-white/35 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
