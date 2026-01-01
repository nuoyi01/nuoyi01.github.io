# Copilot Instructions for nuoyi01.github.io

## Project Overview
This is a static personal blog site built with pure HTML, CSS, and JavaScript. It features a neumorphism design with dark mode support and scroll-triggered animations. The site is hosted on GitHub Pages and uses localStorage for basic admin functionality.

## Architecture
- **index.html**: Main blog page with hero section, post cards, and sidebar widgets
- **admin.html**: Simple admin panel for managing posts (uses localStorage)
- **style.css**: Neumorphism styling with CSS custom properties and animations
- **script.js**: IntersectionObserver for scroll animations
- **picture/**: Static images (e.g., avatar)

## Key Patterns & Conventions

### Design System
- **Neumorphism**: Use `--shadow-out` and `--shadow-in` CSS variables for raised/depressed effects
- **Color Variables**: Always use CSS custom properties from `:root` for theming
- **Dark Mode**: Toggle via `body.dark` class, update both light and dark variable sets
- **Animations**: Use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth transitions

### HTML Structure
- Post cards: `<article class="post-card">` with `<h3>`, `.post-meta`, and `<p>` content
- Meta format: `YYYY-MM-DD | Category • Subcategory | 阅读 X 分钟`
- Widgets: `<div class="widget">` in sidebar with `<h4>` titles

### JavaScript Patterns
- Scroll animations: Use `IntersectionObserver` to add `visible` class
- Admin data: Store posts as JSON array in localStorage under 'posts' key
- Simple authentication: Hardcoded credentials (not for production)

### Content Guidelines
- Language: Chinese (zh-CN)
- Tone: Personal, creative, with playful tags like "腼腆小男生"
- Categories: Design, frontend tech, animations, life posts

## Development Workflow
- Edit files directly (no build process)
- Test locally by opening HTML files in browser
- Deploy via GitHub Pages (push to main branch)
- Images: Place in `picture/` folder, reference with `./picture/filename`

## Common Tasks
- **Add new post**: Update index.html manually or use admin.html (localStorage)
- **Style changes**: Modify CSS variables in `:root` and `body.dark`
- **New animation**: Add keyframes and apply via class toggle
- **Responsive**: Use existing media queries (1024px, 768px, 480px breakpoints)

## File Examples
- Post structure: See existing `.post-card` in index.html
- Widget pattern: See `.widget` in aside section
- Animation trigger: See `script.js` for observer setup</content>
<parameter name="filePath">/workspaces/nuoyi01.github.io/.github/copilot-instructions.md