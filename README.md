# Bhargav Hegde - Portfolio Website

A modern, professional portfolio website built with VitePress showcasing projects, achievements, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with VitePress
- **Project Showcase**: Detailed project pages with individual links
- **Achievements Section**: Awards, publications, and recognition
- **Resume Download**: Easy access to resume
- **Responsive**: Works on all devices
- **Fast**: Optimized for performance

## 📁 Structure

```
docs/
├── index.md              # Home page
├── about.md              # About page with education, experience, skills
├── projects.md           # Projects overview page
├── projects/             # Individual project pages
│   ├── dair-v2x.md
│   ├── rag-knowbot.md
│   ├── sound-disambiguator.md
│   └── av-perception.md
├── achievements.md       # Awards, publications, accomplishments
├── resume.md             # Resume download page
└── .vitepress/
    └── config.ts         # VitePress configuration
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist` directory.

### Preview Production Build

```bash
npm run serve
```

## 📝 Adding Content

### Add a New Project

1. Create a new markdown file in `docs/projects/` (e.g., `my-project.md`)
2. Add a link to it in `docs/projects.md`
3. Include demo videos, screenshots, and details

### Add Resume PDF

1. Place your resume PDF in `docs/resume/` folder
2. Name it `Bhargav_Hegde_Resume.pdf`
3. The download link in `resume.md` will automatically work

### Add Demo Videos/Screenshots

1. Create a `public` folder in `docs/` for static assets
2. Add videos/images there
3. Reference them in your project pages using relative paths

## 🚀 Deployment

This site is configured for GitHub Pages deployment using GitHub Actions.

### Setup

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select **"GitHub Actions"**
4. The workflow will automatically build and deploy on every push to `main`

The site will be available at `https://bhargavhegde.github.io/`

## 📄 License

This portfolio is personal work. Feel free to use it as inspiration for your own portfolio.

## 🔗 Links

- **Live Site**: [bhargavhegde.github.io](https://bhargavhegde.github.io)
- **GitHub**: [github.com/bhargavhegde](https://github.com/bhargavhegde)

