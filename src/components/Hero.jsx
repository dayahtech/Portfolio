import { motion } from "framer-motion";
import { ArrowDown, Award, FileText, Github, Rocket } from "lucide-react";
import { useEffect, useState } from "react";
import { contactLinks, profile } from "../data/portfolioData";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const role = profile.typingRoles[roleIndex];
    if (displayedText.length < role.length) {
      const timeout = window.setTimeout(() => {
        setDisplayedText(role.slice(0, displayedText.length + 1));
      }, 58);
      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      setDisplayedText("");
      setRoleIndex((current) => (current + 1) % profile.typingRoles.length);
    }, 1700);
    return () => window.clearTimeout(timeout);
  }, [displayedText, roleIndex]);

  const github = contactLinks.find((link) => link.type === "github");
  const resume = contactLinks.find((link) => link.type === "resume");

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-radial-grid pt-24"
    >
      <div className="absolute inset-0 command-grid opacity-45" />
      <motion.div
        className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/16 blur-3xl"
        animate={{ scale: [1, 1.16, 1], opacity: [0.34, 0.52, 0.34] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-violet-500/14 blur-3xl"
        animate={{ x: [0, -34, 0], opacity: [0.24, 0.44, 0.24] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/8 px-4 py-2 text-sm text-cyan-100 shadow-glow">
              <Rocket size={16} />
              Portfolio
            </div>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <div className="mt-5 h-10 font-display text-2xl font-medium text-cyan-100 sm:text-3xl">
              {displayedText}
              <span className="ml-1 inline-block h-7 w-0.5 translate-y-1 bg-cyan-200" />
            </div>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">
                <ArrowDown size={18} />
                View Projects
              </a>
              <a href="#certificates" className="btn-secondary">
                <Award size={18} />
                View Certificates
              </a>
              <a href={github?.href} className="btn-secondary" target="_blank" rel="noreferrer">
                <Github size={18} />
                GitHub
              </a>
              <a href={resume?.href} className="btn-secondary">
                <FileText size={18} />
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="rounded-[32px] border border-white/12 bg-white/8 p-5 shadow-2xl shadow-cyan-950/40 backdrop-blur-2xl">
              <div className="rounded-[24px] border border-cyan-300/16 bg-space-900/70 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Status
                  </span>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                    {profile.currentStatus}
                  </span>
                </div>
                {profile.highlights.map(([label, value]) => (
                  <div
                    key={label}
                    className="mb-3 rounded-2xl border border-white/8 bg-white/[0.055] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {label}
                    </p>
                    <p className="mt-1 font-display text-lg text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
