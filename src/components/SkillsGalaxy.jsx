import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { skills } from "../data/portfolioData";

const categories = ["All", "Tech", "Tools", "Languages", "Soft Skills"];

function LevelPills({ level }) {
  const parts = level
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <span className="flex flex-wrap items-center justify-end gap-1.5">
      {parts.map((part) => (
        <span key={part} className="flex items-center gap-1.5">
          <span className="rounded-full bg-white/8 px-3 py-1 text-[11px] text-slate-300">
            {part}
          </span>
        </span>
      ))}
    </span>
  );
}

export default function SkillsGalaxy() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSkill, setActiveSkill] = useState(skills[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const visibleSkills = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return skills
      .filter((skill) =>
        activeCategory === "All" ? true : skill.category === activeCategory,
      )
      .filter((skill) =>
        normalizedSearch
          ? skill.name.toLowerCase().includes(normalizedSearch)
          : true,
      )
      .sort((first, second) => first.name.localeCompare(second.name));
  }, [activeCategory, searchTerm]);

  return (
    <section id="skills" className="section-wrap">
      <div className="section-heading">
        <p className="eyebrow">Skills Galaxy</p>
        <h2>Skills shaped through projects, learning, and practice.</h2>
        <p>
          A practical overview of the technologies, tools, languages, and soft
          skills I use across projects, coursework, internship tasks, and
          continuous learning.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2.5">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
              activeCategory === category
                ? "border-cyan-300/60 bg-cyan-300/14 text-white shadow-glow"
                : "border-white/10 bg-white/6 text-slate-300 hover:border-cyan-300/35 hover:bg-white/8 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}

        <label className="ml-0 flex h-10 w-full max-w-xs items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 text-slate-300 transition focus-within:border-cyan-300/50 focus-within:bg-cyan-300/8 sm:ml-2 sm:w-56">
          <Search size={17} className="shrink-0 text-cyan-100" />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search skills"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </label>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <div className="glass-card min-h-[420px] p-4 sm:p-6">
          <div className="max-h-[620px] overflow-y-auto pr-1">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visibleSkills.length > 0 ? (
                visibleSkills.map((skill, index) => (
                  <motion.button
                    layout
                    key={skill.name}
                    type="button"
                    onClick={() => setActiveSkill(skill)}
                    className={`group min-h-32 rounded-[24px] border p-4 text-left shadow-lg shadow-black/10 transition duration-300 ${
                      activeSkill?.name === skill.name
                        ? "border-cyan-300/60 bg-cyan-300/12 shadow-glow"
                        : "border-white/10 bg-white/[0.055] hover:border-violet-300/40 hover:bg-white/8 hover:shadow-violet-950/20"
                    }`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.22, delay: index * 0.015 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-violet-300/10 text-violet-100 ring-1 ring-violet-300/20 transition group-hover:bg-cyan-300/10 group-hover:text-cyan-100">
                        <Sparkles size={16} />
                      </span>
                      <LevelPills level={skill.level} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {skill.category}
                    </p>
                  </motion.button>
                ))
              ) : (
                <motion.div
                  layout
                  className="rounded-3xl border border-dashed border-white/12 bg-white/[0.04] p-6 text-sm leading-6 text-slate-400 sm:col-span-2 xl:col-span-3"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.22 }}
                >
                  {searchTerm.trim()
                    ? "No skills match your search."
                    : "More skills can be added here later."}
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.aside
          key={activeSkill.name}
          className="glass-card h-fit p-6"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28 }}
        >
          <p className="eyebrow">Selected Skill</p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-white">
            {activeSkill.name}
          </h3>
          <div className="mt-3 flex">
            <LevelPills level={activeSkill.level} />
          </div>
          <p className="mt-5 leading-7 text-slate-300">{activeSkill.description}</p>
          {activeSkill.related.length > 0 ? (
            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                Related work
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeSkill.related.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </motion.aside>
      </div>
    </section>
  );
}
