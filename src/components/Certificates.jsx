import { motion } from "framer-motion";
import { Award, ExternalLink, ImageOff, Layers, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { certificates } from "../data/portfolioData";
import Modal from "./Modal";

const categories = ["All", "Education", "Tech", "General"];

function CertificateModal({ certificate, onClose }) {
  if (!certificate) return null;
  const links =
    certificate.links?.filter((link) => {
      const url = link.href ?? link.url;
      return url && url !== "#";
    }) ?? [];

  return (
    <Modal
      isOpen={Boolean(certificate)}
      onClose={onClose}
      title={certificate.title}
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        {certificate.image ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="aspect-[4/3] w-full rounded-3xl border border-white/12 bg-white object-contain"
          />
        ) : (
          <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-3xl border border-dashed border-cyan-300/24 bg-cyan-300/6 p-6 text-center">
            <ImageOff className="mb-3 text-cyan-100" size={34} />
            <p className="text-sm text-slate-300">
              Certificate image can be added later from the data file.
            </p>
          </div>
        )}

        <div>
          <div className="flex flex-wrap gap-2">
            <span className="tag">{certificate.category}</span>
            <span className="tag">{certificate.platform}</span>
            {certificate.topic ? (
              <span className="tag">{certificate.topic}</span>
            ) : null}
          </div>
          <p className="mt-4 text-sm text-slate-400">
            <span className="font-semibold text-slate-200">Date:</span>{" "}
            {certificate.date}
          </p>
          <p className="mt-5 leading-7 text-slate-300">{certificate.description}</p>

          <h4 className="mt-6 font-display text-lg font-semibold text-white">
            What I Learned
          </h4>
          <ul className="mt-3 grid gap-2">
            {certificate.whatILearned.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-300">
                <Award size={16} className="mt-0.5 shrink-0 text-cyan-200" />
                {item}
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-display text-lg font-semibold text-white">
            What I Practiced
          </h4>
          <div className="mt-3 grid gap-3">
            {certificate.whatIPracticed.map((practice) => (
              <div
                key={practice.title}
                className="rounded-2xl border border-white/10 bg-white/6 p-4"
              >
                <p className="font-medium text-white">{practice.title}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {practice.description}
                </p>
                {practice.link ? (
                  <a
                    href={practice.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-cyan-100"
                  >
                    Practice link <ExternalLink size={14} />
                  </a>
                ) : null}
              </div>
            ))}
          </div>

          {links.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href ?? link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  <ExternalLink size={17} />
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </Modal>
  );
}

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const visibleCertificates = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return certificates
      .filter((certificate) =>
        activeCategory === "All"
          ? true
          : certificate.category === activeCategory,
      )
      .filter((certificate) =>
        normalizedSearch
          ? certificate.title.toLowerCase().includes(normalizedSearch)
          : true,
      )
      .sort((first, second) => first.title.localeCompare(second.title));
  }, [activeCategory, searchTerm]);

  return (
    <section id="certificates" className="section-wrap">
      <div className="section-heading">
        <p className="eyebrow">Certificates</p>
        <h2>Verified certificates and achievements.</h2>
        <p>
          This section is only for certificates and achievement records I can
          show.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-2">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeCategory === category
                ? "border-cyan-300/60 bg-cyan-300/14 text-white shadow-glow"
                : "border-white/10 bg-white/6 text-slate-300 hover:border-cyan-300/35 hover:text-white"
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
            placeholder="Search certificates"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </label>
      </div>

      <div className="max-h-[620px] overflow-y-auto pr-1">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleCertificates.length > 0 ? (
            visibleCertificates.map((certificate, index) => (
              <motion.button
                key={certificate.id}
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                className="glass-card group flex h-full flex-col overflow-hidden text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.42, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="block aspect-video w-full bg-white object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-cyan-300/14 via-violet-300/14 to-fuchsia-300/10">
                    <Layers className="text-cyan-100" size={36} />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="tag">{certificate.category}</span>
                    <span className="tag">{certificate.platform}</span>
                    {certificate.topic ? (
                      <span className="tag">{certificate.topic}</span>
                    ) : null}
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug text-white transition group-hover:text-cyan-100">
                    {certificate.title}
                  </h3>
                </div>
              </motion.button>
            ))
          ) : (
            <motion.div
              className="rounded-3xl border border-dashed border-white/12 bg-white/[0.04] p-6 text-sm leading-6 text-slate-400 sm:col-span-2 xl:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.42 }}
            >
              {searchTerm.trim()
                ? "No certificates match your search."
                : "No certificates yet in this category."}
            </motion.div>
          )}
        </div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
