import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  /*
    GitHub Pages base path guide:
    - username.github.io repository: use base: "/"
    - normal repository such as portfolio: use base: "/portfolio/"
    - custom domain: use base: "/"

    This project is currently configured for a normal repository named "Portfolio".
    If your repository name is lowercase "portfolio", change this to "/portfolio/".
  */
  base: "/Portfolio/",
});
