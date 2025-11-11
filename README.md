# HopeBridge — DAY 2HopeBridge — DAY 2 (Premium UI)



A premium, client-side feedback and incident reporting app built with vanilla JavaScript and localStorage. No backends, no frameworks—just clean, accessible design and smooth interactions.Overview

--------

## What is HopeBridge?This is the DAY 2 version of the HopeBridge feedback/incident reporting demo. The app is a static, client-side site using vanilla JavaScript and localStorage to persist submissions.



HopeBridge is a lightweight demo for capturing community feedback and incident reports. The Day 2 iteration focuses on a polished, modern UI with a corporate-grade aesthetic while keeping the codebase minimal and readable.What I changed

---------------

**Why I built this:**  - Upgraded base tokens in `css/base.css` to a premium neutral palette and improved spacing/elevation.

I wanted to showcase how far vanilla JavaScript, HTML, and CSS can go when thoughtfully designed. This isn't bloated—it's intentionally small, fast, and maintainable.- Redesigned components in `css/components.css` for a corporate look (buttons, forms, header, table).

- Enhanced `css/theme.css` dark theme handling and reduced-motion support.

## Features- Preserved the core application logic in `js/app.js` (only non-behavioral selector fixes were applied earlier to restore runtime correctness).

- Updated `index.html` header/footer earlier to include a premium header and a compact footer with "Dinesh Dev" and social links.

- **Clean form & reporting** — Submit incidents or feedback with minimal friction

- **Persistent storage** — All entries saved to localStorage; reload anytime and your data stays# HopeBridge — DAY 2 (Premium UI)

- **Theme toggle** — Light and Graphite dark modes, with your preference persisted

- **Responsive design** — Works on mobile, tablet, and desktop without extra librariesA modern, static demo app for community feedback and incident reporting. This repository contains a client-side single-page app that uses vanilla JavaScript and localStorage to collect and manage submissions.

- **Accessible first** — Keyboard navigation, focus states, reduced-motion support, and semantic HTML

- **Minimal code** — Plain HTML, modular CSS (with tokens), and vanilla JS; nothing hidden## About this project



## ScreenshotsThis is the DAY 2 UI refinement of the HopeBridge demo. The focus of this iteration was a premium, accessible visual overhaul while preserving the original application logic in `js/app.js`.


## In Dark Mode:

![App screenshot 1](https://github.com/DINESHTM07/Hopebridge---NGOs/blob/2aa9ee900e11cdc67b3fe9cdc90d59418568472f/assets/127.0.0.1_5500_DAY%25202_index.html%20(1).png)

## In light Mode:

![App screenshot 2](https://github.com/DINESHTM07/Hopebridge---NGOs/blob/0c4d23bc8bd18eb8efce4540d72e59196b3cd8f8/assets/127.0.0.1_5500_DAY%25202_index.html.png)

- Theme toggle with dark (Graphite) and light variants

## Get started- Accessible patterns: reduced-motion support, focus-visible outlines, ARIA where applicable

- Client-side persistence via `localStorage` (key: `hopebridge_submissions`)

### Open locally

Double-click `DAY 2/index.html` in your file browser, or right-click → "Open with" your browser.## Features



### Serve over HTTP (optional)- Submit reports via a compact form

For testing server-side features or running automated checks, serve the folder with any static server:- View submissions in a responsive table with Delete and Clear actions

- Theme toggle with persisted preference

```sh- Small, readable codebase: plain HTML/CSS/JS — easy to fork and adapt

# Python

python -m http.server 8000## Run locally (GitHub-friendly)



# Or NodeOpen the `index.html` file in your web browser (double-click or use your editor's "Open in Browser").

npx http-server -c-1 .

```If you prefer to serve the site over a local HTTP server (recommended for testing some browser features), use any static server you like (for example, common servers include Python's http.server or Node's http-server). Then open the served site and navigate to the `DAY 2/index.html` path.



Then visit http://localhost:8000 and navigate to `DAY 2/index.html`.<!-- Gallery: replace or add images in assets/ -->

![App screenshot 1](assets/127.0.0.1_5500_DAY%25202_index.html.png)

## How to use![App screenshot 2](assets/127.0.0.1_5500_DAY%25202_index.html%20(1).png)



1. **Submit a report** — Fill the form (name, contact, NGO, category, message) and click Submit## Usage

2. **View your entries** — They appear instantly in the table below and are saved to localStorage

3. **Delete entries** — Click the Delete button on any row to remove it1. Open the page in a browser or serve it locally.

4. **Clear all** — Use the "Clear All" button to wipe your localStorage2. Fill the form and submit a report — entries are added to the table and persisted in `localStorage` under the key `hopebridge_submissions`.

5. **Toggle theme** — Click the theme toggle (bridge icon) to switch between light and Graphite dark modes3. Use the Delete button to remove single entries. Use Clear All to remove all entries.

4. Toggle theme — the preference is saved and restored on reload.

Your preference is remembered across sessions.

## Developer notes

## For developers

- Important DOM IDs preserved for JS behavior: `feedbackForm`, `submissionsTable`, `clearSubmissions`, `formStatus`, `year`, `themeToggle`.

**Key files:**- Persistence key: `hopebridge_submissions` (string in `localStorage`).

- `index.html` — Markup with header, form, table, footer- Styling is tokenized through CSS variables in `css/base.css`, `css/components.css`, and `css/theme.css`.

- `css/base.css` — Design tokens (colors, spacing, typography)

- `css/components.css` — Component styles (form, table, buttons)If you plan automated testing or CI, serve the site through a static server in the CI environment before running browser-based checks.

- `css/theme.css` — Light and dark theme variables

- `js/app.js` — Form handling, localStorage sync, theme management## Author — Dinesh Dev



**Important IDs & keys:**Short bio: Im a front-end developer focused on accessible, design-forward interfaces that preserve lightweight, vanilla workflows. This demo showcases a corporate/premium UI treatment layered on a small client-side app.

- Form: `feedbackForm`, inputs: `name`, `contact`, `ngo`, `category`, `message`

- Table: `submissionsTable`, `clearSubmissions`Contact / Links

- Status: `formStatus`- GitHub: https://github.com/your-username (replace with your handle)

- Theme: `themeToggle`- LinkedIn: https://www.linkedin.com/in/your-profile (replace with your URL)

- localStorage key: `hopebridge_submissions`- Email: duke02101@gmail.com



**Extending:**If you want me to include a short portfolio link, logo, or a particular bio blurb, tell me what to add and I'll update this section.

All colors use CSS variables, so you can swap the palette by editing `css/base.css` and `css/theme.css`. No inline hex values—everything is tokenized.

## Contributing

## Contributing

1. Fork the repository

Found a bug? Want to improve the design? Open a PR. Keep it simple and focused—one feature or fix per PR, please.2. Make changes on a feature branch

3. Open a pull request with a clear description of changes

See `CONTRIBUTING.md` for guidelines.

## License

## License

This demo is provided under the MIT license. See `LICENSE` (or add one) if you want a formal license file.

MIT. Free to use, fork, and adapt. See `LICENSE` for details.

---

## About me

If you'd like, I can also:

I'm Dinesh Dev, a front-end developer obsessed with clean, accessible, and performant interfaces. I build with vanilla JavaScript when frameworks are overkill, and I believe every user—including those on slow networks or using assistive tech—deserves a great experience.

- Add a small animated GIF or higher-fidelity screenshot to the README (I added a placeholder SVG which you can replace with a real capture)

**Links:**- Add a `CONTRIBUTING.md` or a GitHub Pages workflow to publish the demo

- GitHub: https://github.com/your-username

- LinkedIn: https://www.linkedin.com/in/your-profile

- Email: duke02101@gmail.com
-

---

**Questions?** Open an issue on GitHub or reach out via email. Enjoy!
