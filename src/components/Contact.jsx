import { motion } from "framer-motion";
import { FileText, Github, Mail, MessageCircle, Send } from "lucide-react";
import { contactLinks } from "../data/portfolioData";

const icons = {
  github: Github,
  whatsapp: MessageCircle,
  email: Mail,
  resume: FileText,
};

export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <div className="section-heading">
        <p className="eyebrow">Contact / Resume</p>
        <h2>Let’s connect and review my work.</h2>
        <p>
          Quick access to my GitHub, resume, email, and WhatsApp for project
          reviews, opportunities, and professional contact.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {contactLinks.map((link, index) => {
          const Icon = icons[link.type] || Send;
          const isExternal = link.href?.startsWith("http");
          const isPlaceholder = !link.href || link.href === "#";
          const cardContent = (
            <>
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 transition group-hover:shadow-glow">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {link.label}
              </h3>
              <p className="mt-2 break-words text-sm leading-6 text-slate-400">
                {link.value}
              </p>
            </>
          );

          if (isPlaceholder) {
            return (
              <motion.div
                key={link.type}
                className="glass-card group p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                {cardContent}
              </motion.div>
            );
          }

          return (
            <motion.a
              key={link.type}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="glass-card group p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
            >
              {cardContent}
            </motion.a>
          );
        })}
      </div>

    </section>
  );
}
