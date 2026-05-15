# Developer Portfolio

A responsive personal portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. The site presents my developer profile, projects, skills, certificates, milestones, and contact links in a polished dark futuristic interface.

This portfolio is designed to be work-ready: easy to review, simple to maintain, and suitable for sharing with recruiters, employers, collaborators, and internship or junior developer opportunities.

## Live Site

```text
https://dayahtech.github.io/Portfolio/
```

## Purpose

This project showcases my learning journey and practical development experience as an IT diploma graduate focused on full-stack development, backend systems, and cybersecurity learning.

The portfolio highlights:

- Full-stack and frontend project experience
- Coursework, self-projects, and personal learning progress
- Technologies and tools used across real projects
- Certificates and verified learning achievements
- Contact links, resume access, and GitHub profile

## Main Features

- Responsive portfolio layout for desktop, tablet, and mobile
- Project journey section grouped by coursework and self-projects
- Project status badges such as Completed, In Progress, and Active Development
- Project detail modals with features, tech stack, roles, links, and media support
- Skills Galaxy section with filtering, searching, and selected skill details
- Certificate section with searchable certificate cards and modals
- About timeline for education, internship, and development milestones
- Smooth animations and subtle hover interactions
- Static deployment support through GitHub Pages

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- GitHub Pages

## Project Structure

```text
src/
  components/          Reusable portfolio sections and UI components
  data/                Central portfolio content data
  App.jsx              Main page composition
  main.jsx             React entry point
  index.css            Global styles and Tailwind component classes

public/
  assets/
    certificates/      Certificate images
    projects/          Project screenshots or videos
    resume/            Resume PDF
```

Most portfolio content is managed in:

```text
src/data/portfolioData.js
```

This keeps the site maintainable because projects, skills, certificates, contact links, and profile information can be updated without rewriting components.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

The project is configured for GitHub Pages deployment using:

```bash
npm run deploy
```

The current Vite base path is:

```js
base: "/Portfolio/"
```

This matches a GitHub Pages project site deployed under a repository named `Portfolio`.

## Content Maintenance

To update the portfolio:

1. Edit profile, project, skill, certificate, and contact data in `src/data/portfolioData.js`.
2. Add project screenshots or videos to `public/assets/projects/`.
3. Add certificate images to `public/assets/certificates/`.
4. Add or replace the resume at `public/assets/resume/resume.pdf`.
5. Run `npm run build` before deploying.

Use the `assetPath(...)` helper when linking public assets so paths work correctly both locally and on GitHub Pages.

Example:

```js
assetPath("assets/projects/finora-dashboard.png")
```

## Project Media Support

Projects can include screenshots or videos through the `media` array in `portfolioData.js`.

Example:

```js
media: [
  {
    type: "image",
    src: assetPath("assets/projects/finora-dashboard.png"),
    alt: "Finora dashboard screen",
  },
]
```

If a project does not have screenshots yet, keep:

```js
media: []
```

The project modal will show a clean placeholder message until media is added.

## Static Architecture

This portfolio is frontend-only. It has no backend server, database, authentication system, API routes, admin dashboard, or environment variables.

Because it builds into static files, it can be hosted on GitHub Pages or other static hosting platforms.

## Notes

This repository includes a project-level `.npmrc` with `strict-ssl=false` because the local Windows environment had certificate-chain verification issues when installing packages. If npm works normally in another environment, that file can be removed.
