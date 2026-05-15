import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ImageOff,
  LockKeyhole,
  Play,
  Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { projectCategories, projects } from "../data/portfolioData";
import Modal from "./Modal";

function StatusBadge({ status }) {
  if (!status) return null;

  const statusStyles = {
    Completed: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
    "In Progress": "border-amber-300/30 bg-amber-300/10 text-amber-100",
    "Active Development": "border-cyan-300/35 bg-cyan-300/10 text-cyan-100",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
        statusStyles[status] ?? "border-white/12 bg-white/8 text-slate-200"
      }`}
    >
      {status}
    </span>
  );
}

function ProjectModal({ project, onClose }) {
  const [mediaIndex, setMediaIndex] = useState(0);
  const touchStartX = useRef(null);

  useEffect(() => {
    setMediaIndex(0);
  }, [project?.id]);

  const mediaItems = Array.isArray(project?.media)
    ? project.media.map((item) =>
        typeof item === "string" ? { src: item, type: "image" } : item,
      )
    : [];
  const hasMedia = mediaItems.length > 0;
  const hasMultipleMedia = mediaItems.length > 1;
  const safeMediaIndex = hasMedia
    ? Math.min(mediaIndex, mediaItems.length - 1)
    : 0;
  const activeMedia = hasMedia ? mediaItems[safeMediaIndex] : null;
  const links = project?.links?.filter((link) => link.href && link.href !== "#") ?? [];

  const showPreviousMedia = () => {
    setMediaIndex((current) =>
      current === 0 ? mediaItems.length - 1 : current - 1,
    );
  };

  const showNextMedia = () => {
    setMediaIndex((current) =>
      current === mediaItems.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (!project || !hasMultipleMedia) return undefined;

    const timer = window.setInterval(() => {
      setMediaIndex((current) =>
        current === mediaItems.length - 1 ? 0 : current + 1,
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, [project, hasMultipleMedia, mediaItems.length]);

  const handleTouchStart = (event) => {
    if (!hasMultipleMedia) return;
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (!hasMultipleMedia || touchStartX.current === null) return;

    const distance = touchStartX.current - event.changedTouches[0].clientX;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;

    if (distance > 0) {
      showNextMedia();
    } else {
      showPreviousMedia();
    }
  };

  if (!project) return null;

  return (
    <Modal
      isOpen={Boolean(project)}
      onClose={onClose}
      title={project.title}
      titleAccessory={<StatusBadge status={project.status} />}
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          {hasMedia ? (
            <div
              className="overflow-hidden rounded-[24px] border border-white/12 bg-black/30 shadow-2xl shadow-cyan-950/20"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {activeMedia.type === "video" ? (
                <video src={activeMedia.src} controls className="aspect-video w-full object-cover" />
              ) : (
                <img
                  src={activeMedia.src}
                  alt={activeMedia.alt || project.title}
                  className="aspect-video w-full object-cover"
                />
              )}
              {hasMultipleMedia ? (
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-space-950/80 p-3">
                  <button
                    type="button"
                    onClick={showPreviousMedia}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10"
                    aria-label="Previous media"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <div className="flex gap-2">
                    {mediaItems.map((item, index) => (
                      <button
                        key={`${item.src}-${index}`}
                        type="button"
                        onClick={() => setMediaIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          index === safeMediaIndex ? "bg-cyan-200" : "bg-white/25"
                        }`}
                        aria-label={`Show media ${index + 1} of ${mediaItems.length}`}
                      />
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={showNextMedia}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10"
                    aria-label="Next media"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center rounded-[24px] border border-dashed border-cyan-300/24 bg-cyan-300/6 p-6 text-center">
              <ImageOff className="mb-3 text-cyan-100" size={34} />
              <p className="text-sm text-slate-300">
                Media preview will be available in the future.
              </p>
            </div>
          )}

          <div className="mt-4 grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Type
              </p>
              <p className="mt-1 text-sm text-white">{project.type}</p>
            </div>
            {project.duration ? (
              <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Duration
                </p>
                <p className="mt-1 text-sm text-white">{project.duration}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="tag">{project.category}</span>
            <span className="tag">{project.type}</span>
          </div>
          <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

          <h4 className="mt-6 font-display text-lg font-semibold text-white">
            Key Features
          </h4>
          <ul className="mt-3 grid gap-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-slate-300">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-cyan-200" />
                {feature}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-display text-lg font-semibold text-white">
            Tech Stack
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag">
                {tech}
              </span>
            ))}
          </div>

          <h4 className="mt-6 font-display text-lg font-semibold text-white">
            Roles
          </h4>
          <div className="mt-3 grid gap-3">
            {project.roleGroups?.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-white/10 bg-white/[0.055] p-4"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">
                  {group.label}
                </p>
                <ul className="mt-3 grid gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )) ?? <p className="leading-7 text-slate-300">{project.role}</p>}
          </div>

          {project.privacyNote ? (
            <div className="mt-5 rounded-2xl border border-violet-300/18 bg-violet-300/8 p-4 text-sm text-violet-100">
              <LockKeyhole size={16} className="mb-2" />
              {project.privacyNote}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                {link.label === "Live Demo" ? <Play size={17} /> : <ExternalLink size={17} />}
                {link.label}
              </a>
            ))}
          </div>

          {links.length === 0 && !project.unavailableLinks?.length ? (
            <p className="mt-5 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-300">
              Live demo currently unavailable.
            </p>
          ) : null}

          {project.unavailableLinks?.map((item) => (
            <p
              key={item.label}
              className="mt-3 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm text-slate-300"
            >
              {item.reason}
            </p>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const groupedProjects = useMemo(
    () =>
      projectCategories.map((category) => ({
        ...category,
        items: projects.filter((project) => project.category === category.title),
      })),
    [],
  );

  return (
    <section id="projects" className="section-wrap">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Projects built through coursework and self-learning.</h2>
        <p>
          A collection of academic and personal projects that show my learning
          progress, development practice, tools used, and the role I handled in
          each build.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {groupedProjects.map((category, categoryIndex) => (
          <motion.article
            key={category.id}
            className="glass-card p-5 sm:p-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
          >
            <h3 className="font-display text-2xl font-semibold text-white">
              {category.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {category.description}
            </p>

            <div className="mt-8 max-h-[560px] overflow-y-auto pr-1">
              <div className="relative grid gap-5 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/70 before:via-violet-300/45 before:to-transparent">
                {category.items.map((project, index) => (
                  <motion.button
                    key={project.id}
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group relative pl-11 text-left sm:pl-12"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.35, delay: index * 0.06 }}
                    whileHover={{ y: -3 }}
                  >
                    <span className="absolute left-0 top-3 h-8 w-8 rounded-full border border-cyan-200/50 bg-space-900 shadow-glow transition duration-300 group-hover:scale-110 group-hover:bg-cyan-300/20" />
                    <span className="block rounded-[24px] border border-white/10 bg-white/[0.055] p-5 shadow-lg shadow-black/10 transition duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/8 group-hover:shadow-cyan-950/25">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-sm font-medium text-cyan-100">
                          {project.date}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-500" />
                        <span className="font-display text-base font-semibold text-white transition group-hover:text-cyan-50">
                          {project.title}
                        </span>
                        <StatusBadge status={project.status} />
                      </span>
                      <span className="mt-3 block font-display text-lg font-semibold text-white">
                        {project.type}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-slate-400">
                        {project.shortDescription}
                      </span>
                      <span className="mt-4 flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
