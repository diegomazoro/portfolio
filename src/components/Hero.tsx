export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#6366f1] uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
          Available for new projects
        </span>
      </div>

      <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
        Building products
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a78bfa]">
          people love
        </span>
      </h1>

      <p className="animate-fade-up-delay-2 text-lg md:text-xl text-[#a1a1aa] max-w-2xl leading-relaxed mb-10">
        I&apos;m Diego Mazo — a product builder with a knack for turning complex
        ideas into clean, usable software. I work across web, mobile, data, and
        design.
      </p>

      <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-[#6366f1] text-white text-sm font-medium hover:bg-[#818cf8] transition-colors"
        >
          See my work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-[#27272a] text-[#a1a1aa] text-sm font-medium hover:border-[#6366f1] hover:text-white transition-colors"
        >
          Get in touch
        </a>
      </div>

      <div className="animate-fade-up-delay-4 mt-20 flex flex-wrap gap-8 text-sm text-[#a1a1aa]">
        {[
          { label: "Projects shipped", value: "20+" },
          { label: "Years building", value: "5+" },
          { label: "Domains covered", value: "4" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
