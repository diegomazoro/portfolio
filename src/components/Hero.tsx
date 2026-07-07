const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='250' height='250' filter='url(%23n)'/%3E%3C/svg%3E";

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
