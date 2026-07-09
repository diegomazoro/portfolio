import IntroCard from "./IntroCard";

const skills = [
  { category: "Web", items: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"] },
  { category: "Mobile", items: ["React Native", "Swift", "Expo", "iOS", "Android"] },
  { category: "Data & AI", items: ["Python", "LLMs", "RAG", "PostgreSQL", "Supabase"] },
  { category: "Design", items: ["Figma", "Design Systems", "Prototyping", "User Research"] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-semibold tracking-widest text-[#6366f1] uppercase mb-10">
        About
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Interactive intro card */}
        <IntroCard />

        {/* Skills grid */}
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
