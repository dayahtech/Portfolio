import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, titleAccessory, children }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-space-950/80 px-4 py-6 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[28px] border border-white/12 bg-space-900/95 p-5 shadow-2xl shadow-cyan-950/40 ring-1 ring-cyan-300/10 sm:p-7"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div className="flex min-w-0 flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  {title}
                </h3>
                {titleAccessory}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/8 text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
