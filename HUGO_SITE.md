# Hugo Site Documentation

This repository includes a Hugo static site for the Nostr UX Research Study, designed to be deployed to GitHub Pages.

## Architecture

**Static Site Generator:** Hugo (v0.121.0+)
**Theme:** Custom clean/minimal theme (`themes/nostr-ux/`)
**Deployment:** GitHub Actions → GitHub Pages
**Analytics:** Plausible.io
**Search:** Lunr.js (client-side)

## Directory Structure

```
nostr-ux-research/
├── hugo.toml                    # Hugo configuration
├── content/                     # Hugo-specific content
│   ├── _index.md               # Homepage content
│   ├── patterns/_index.md      # Pattern library index
│   └── start/_index.md         # Get Started page
├── patterns/                    # Pattern markdown files (mounted to content/patterns/)
│   ├── 01-onboarding.md        # With YAML front matter
│   ├── 02-content-discovery.md
│   └── ... (all 6 patterns)
├── appendices/                  # Resources (mounted to content/resources/)
├── quick-reference.md           # Mounted to content/
├── themes/nostr-ux/            # Custom theme
│   ├── layouts/                 # HTML templates
│   │   ├── _default/
│   │   │   ├── baseof.html     # Base template
│   │   │   ├── list.html       # Section pages
│   │   │   ├── single.html     # Individual pages
│   │   │   └── index.json      # Search index
│   │   ├── index.html          # Homepage template
│   │   └── partials/
│   │       ├── header.html
│   │       └── footer.html
│   └── static/                  # CSS, JS, images
│       ├── css/main.css        # Clean/minimal styling
│       └── js/search.js        # Search functionality
└── .github/workflows/hugo.yml   # CI/CD pipeline

## Content Organization

Hugo uses "mounts" to map existing markdown files:
- `patterns/` → `content/patterns/` (the 6 pattern documents)
- `appendices/` → `content/resources/` (references, methodology)
- `quick-reference.md` → `content/quick-reference.md`

This allows the original markdown files to remain readable on GitHub while being processed by Hugo for the website.

## Front Matter

All pattern files now include YAML front matter:

```yaml
---
title: "Onboarding & First-Run Experience"
patternNumber: 1
problem: "15-20 minute setup, key management overwhelming"
impact: "Users abandon before reaching value"
solution: "Minimize time-to-first-value, defer complexity"
showToc: true
weight: 1
---
```

This metadata powers:
- Homepage pattern cards
- Pattern list views
- Search indexing
- Navigation ordering

## Local Development

### Prerequisites
- Hugo Extended v0.121.0+ ([install guide](https://gohugo.io/installation/))
- Git

### Run locally
```bash
cd nostr-ux-research
hugo server -D
```

Visit: http://localhost:1313/nostr-ux-research/

### Build for production
```bash
hugo --gc --minify
```

Output in `public/` directory.

## Deployment

**Automatic via GitHub Actions:**
1. Push to `master` branch
2. GitHub Actions workflow runs (`.github/workflows/hugo.yml`)
3. Hugo builds the site
4. Deploys to GitHub Pages

**Manual deployment:**
Not recommended. Use the automated workflow.

## Features

### Homepage
- Hero section with clear value proposition
- Problem statement with statistics
- Pattern preview cards (auto-generated from front matter)
- Validation framework overview
- Target audience callout

### Pattern Pages
- Sticky table of contents
- Syntax-highlighted code examples
- Previous/Next navigation
- Clean typography optimized for reading

### Search
- Client-side search powered by Lunr.js
- Keyboard shortcut to open (click search icon)
- Searches titles, content, and tags
- Results show relevant excerpts

### Mobile Responsive
- Mobile-first CSS
- Readable on all screen sizes
- Touch-optimized navigation

## Analytics

Configured for Plausible.io (privacy-friendly analytics):
- Domain: `shawnyeager.github.io`
- Script: `https://plausible.io/js/script.js`
- No cookies, GDPR compliant

To set up:
1. Create account at plausible.io
2. Add site: `shawnyeager.github.io/nostr-ux-research`
3. Verify tracking is working after deployment

## Design Decisions

**Clean/Minimal Style:**
- Inspired by Stripe/Linear documentation
- Focus on readability and content
- Minimal distractions
- Professional yet approachable

**Mobile-First:**
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets

**Performance:**
- Minimal JavaScript (only search)
- Static generation (fast loads)
- Lazy loading for images (if added later)

## Customization

### Colors
Edit CSS variables in `themes/nostr-ux/static/css/main.css`:
```css
:root {
  --color-primary: #2563eb;
  --color-text: #1e293b;
  /* ... */
}
```

### Navigation
Edit menu in `hugo.toml`:
```toml
[[menu.main]]
  name = 'Patterns'
  url = '/patterns/'
  weight = 3
```

### Analytics
Update in `hugo.toml`:
```toml
[params]
  plausibleDomain = 'your-domain.com'
```

## Future Enhancements

Marked as "for later" but easy to add:

1. **Interactive code examples** - Add CodePen embeds or live demos
2. **Mobile app previews** - Screenshot galleries or video demos
3. **Nostr integration** - Comments via Nostr, zaps for patterns
4. **Dark mode** - CSS variables make this straightforward
5. **Pattern filtering** - Filter by severity, implementation effort

## Troubleshooting

**Hugo build fails:**
- Check Hugo version: `hugo version` (need v0.121.0+)
- Use extended version (required for Sass)

**Search not working:**
- Ensure `index.json` is being generated
- Check browser console for errors
- Verify Lunr.js is loading

**Images not showing:**
- Place in `static/images/` or `themes/nostr-ux/static/images/`
- Reference as `/nostr-ux-research/images/filename.png`

**GitHub Pages 404:**
- Verify repository settings → Pages → Source is "gh-pages" branch
- Check Actions tab for deployment status
- Ensure `baseURL` in `hugo.toml` matches your GitHub Pages URL

## Maintenance

**Adding a new pattern:**
1. Create markdown file in `patterns/`
2. Add YAML front matter (copy from existing pattern)
3. Set appropriate `patternNumber` and `weight`
4. Content will automatically appear in navigation and search

**Updating existing content:**
- Edit markdown files directly in `patterns/`, `appendices/`, etc.
- Hugo's mounts will pick up changes automatically
- Push to master to deploy

**Theme updates:**
- Edit layouts in `themes/nostr-ux/layouts/`
- Edit CSS in `themes/nostr-ux/static/css/main.css`
- Test locally before pushing

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Mounts](https://gohugo.io/hugo-modules/configuration/#module-config-mounts)
- [Lunr.js Documentation](https://lunrjs.com/)
- [Plausible Analytics](https://plausible.io/docs)

---

**Questions or issues?** Open an issue on GitHub.

Last updated: November 2025
