# Web Page Generator - Vite App

A modern insurance landing page built with Vite and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building for Production

Build the app for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── main.js          # Entry point
│   └── style.css        # Tailwind CSS imports
├── index.html           # Main HTML file
├── page.md             # Content specification
├── bg.webp             # Hero background image
├── theme.json          # Design tokens
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── postcss.config.js   # PostCSS configuration
```

## Features

- ⚡️ Fast development with Vite
- 🎨 Tailwind CSS for styling
- 📱 Fully responsive design
- 🚀 Optimized production builds
- 📄 Content-driven from Markdown specification

## Deployment

The built files in `dist/` can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
