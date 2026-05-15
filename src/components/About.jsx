import { motion } from "framer-motion";
import { Milestone } from "lucide-react";
import { aboutMilestones, profile } from "../data/portfolioData";

export default function About() {
  const displayedMilestones = [...aboutMilestones].reverse();

  return (
    <section id="about" className="section-wrap">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>{profile.tagline}</h2>
        <p>{profile.summary}</p>
      </div>

      <div className="glass-card p-5 sm:p-7">
        <div className="max-h-[560px] overflow-y-auto pr-1">
          <div className="relative grid gap-5 before:absolute before:left-[17px] before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/70 before:via-violet-300/45 before:to-transparent">
            {displayedMilestones.map((milestone, index) => (
              <motion.article
                key={milestone.id}
                className="group relative pl-14"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
              >
                <div className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border border-cyan-200/45 bg-space-900 text-cyan-100 shadow-glow transition group-hover:scale-110 group-hover:bg-cyan-300/18">
                  <Milestone size={17} />
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 transition group-hover:border-cyan-300/35 group-hover:bg-cyan-300/8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">
                    {milestone.date}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {milestone.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
