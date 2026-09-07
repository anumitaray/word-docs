# Microsoft Word Product Documentation

> Official, comprehensive documentation portal for **Microsoft Word** built with Docusaurus.
>
> ?? **Live GitHub Pages Portal**: [https://anumitaray.github.io/word-docs/](https://anumitaray.github.io/word-docs/)

---

## ?? Documentation Sections

- **[Product Overview](https://anumitaray.github.io/word-docs/docs/overview)**: High-level introduction, architecture, key features, and UI navigation.
- **[Getting Started](https://anumitaray.github.io/word-docs/docs/getting-started)**: System requirements, creating a document, basic typography, and shortcuts.
- **[Comprehensive User Guide](https://anumitaray.github.io/word-docs/docs/user-guide)**: Section breaks, custom styles, tables, citations/bibliography, Track Changes, and mail merge.
- **[Troubleshooting Guide](https://anumitaray.github.io/word-docs/docs/troubleshooting)**: Document recovery, Safe Mode diagnostics, phantom page breaks, and sync resolution.

---

## ??? Local Development

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm start
```
Runs locally at `http://localhost:3000/word-docs/`.

### Build Production Website
```bash
npm run build
```
Emits optimized static HTML and assets into `build/`.

---

## ?? GitHub Pages Deployment

The documentation site is automatically built and published to GitHub Pages via the GitHub Actions workflow in `.github/workflows/deploy.yml` on every push to `main`.
