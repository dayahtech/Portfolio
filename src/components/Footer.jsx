import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 py-8 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
      <p>
        {profile.name} - Frontend-only portfolio built for GitHub Pages.
      </p>
    </footer>
  );
}
