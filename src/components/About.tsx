const skills = [
  { category: "Web", items: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"] },
  { category: "Mobile", items: ["React Native", "Swift", "Expo", "iOS", "Android"] },
  { category: "Data & AI", items: ["Python", "LLMs", "RAG", "PostgreSQL", "Supabase"] },
  { category: "Design", items: ["Figma", "Design Systems", "Prototyping", "User Research"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-[#6366f1] uppercase mb-4">
            About
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Shipping full-stack products end-to-end
          </h3>
          <div className="space-y-4 text-[#a1a1aa] leading-relaxed">
            <p>
              I build software products from the ground up — from concept and
              design to production deployment. I care about the details that
              make a product feel right: fast load times, intuitive UX, and
              clean code that teams can maintain.
            </p>
            <p>
              My background spans multiple domains: web applications, mobile
              apps, data pipelines, and product design. This breadth lets me
              see the full picture and make better decisions at each layer of
              the stack.
            </p>
            <p>
              I&apos;m driven by founders and teams building things that matter.
              Whether as a collaborator or independent builder, I bring both
              technical depth and product thinking to every project.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-semibold tracking-widest text-[#a1a1aa] uppercase">
            Skills & tools
          </h4>
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs text-[#6366f1] font-medium mb-2">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-md bg-[#18181b] border border-[#27272a] text-[#a1a1aa]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
