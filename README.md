<div align="center">

# MDK Portfolio

### A focused, responsive portfolio for software engineering and Flutter development

[![Live Website](https://img.shields.io/badge/Live%20Website-mdanyal.page.gd-0f766e?style=for-the-badge)](https://mdanyal.page.gd/)
[![GitHub](https://img.shields.io/badge/GitHub-mdanyal--khan-111827?style=for-the-badge&logo=github)](https://github.com/mdanyal-khan)
[![Built With](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JavaScript-e11d48?style=for-the-badge)](#technology-stack)

**[View the live portfolio](https://mdanyal.page.gd/)**

</div>

## About

MDK Portfolio is the personal website of **Muhammad Danyal Khan**, a Software Engineering student and Flutter developer based in Khyber Pakhtunkhwa, Pakistan.

It brings professional background, technical skills, education, selected projects, certifications, services, testimonials, and contact information into one polished single-page experience.

> A fast, accessible, and maintainable portfolio built with the web platform itself: semantic HTML, custom CSS, and vanilla JavaScript.

## Contents

- [Highlights](#highlights)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Run Locally](#run-locally)
- [Deploy](#deploy)
- [Customize](#customize)
- [Contact](#contact)
- [License](#license)

## Highlights

| Experience | Details |
| --- | --- |
| Responsive design | Works across desktop, tablet, and mobile screens |
| Theme support | Light and dark modes with a persistent preference |
| Project discovery | Filterable Flutter, AI and Python, and web project gallery |
| Professional profile | Skills, education, certification, services, FAQs, and testimonials |
| Contact workflow | Formspree-powered contact form with validation and feedback |
| Search visibility | Metadata, sitemap, robots rules, Open Graph, and JSON-LD |
| Performance | No framework, build pipeline, or package installation required |

## Technology Stack

| Area | Technology |
| --- | --- |
| Structure | HTML5 |
| Styling | Custom CSS3 and CSS custom properties |
| Interactivity | Vanilla JavaScript (ES6+) |
| Typography | Manrope, Space Grotesk, and JetBrains Mono |
| Contact form | [Formspree](https://formspree.io/) |
| Hosting | Static hosting |

## Project Structure

```text
.
├── assets/                 # Images, icons, certificate, CV, and social assets
├── index.html              # Page content, metadata, and structured data
├── styles.css              # Layout, components, themes, and responsive styles
├── script.js               # Navigation, theme, filters, animations, and form logic
├── site.webmanifest        # Web app metadata
├── sitemap.xml             # Search engine sitemap
├── robots.txt              # Crawler directives
└── README.md               # Project documentation
```

## Run Locally

There are no dependencies to install and no build step.

### 1. Clone the repository

```bash
git clone https://github.com/mdanyal-khan/Portfolio.git
cd Portfolio
```

### 2. Start a local server

Using Python:

```bash
python -m http.server 8000
```

Or using Node.js:

```bash
npx http-server .
```

### 3. Open the portfolio

Visit [http://localhost:8000](http://localhost:8000) in your browser.

Opening `index.html` directly also works, but a local server provides the most reliable behavior for relative assets and the web manifest.

## Deploy

The repository root can be published directly to any static hosting provider. No build command is needed.

Suitable options include:

- GitHub Pages
- Netlify
- Vercel
- Conventional shared static hosting

After changing the public domain, update the canonical URL, Open Graph URLs, structured data, `sitemap.xml`, and `robots.txt` together.

## Customize

| To change | Update |
| --- | --- |
| Contact destination | The `action` attribute on `#contactForm` in `index.html` |
| Portfolio projects | Cards inside `.projects-grid`; use `flutter`, `ai`, or `web` categories |
| Private projects | The existing private-repository treatment in `index.html` |
| Skill levels | The `--proficiency` value on the relevant skill card |
| Colors and themes | CSS custom properties at the beginning of `styles.css` |
| SEO and sharing | Page metadata, JSON-LD, `sitemap.xml`, and `robots.txt` |

## Contact

| Channel | Link |
| --- | --- |
| Email | [mdanyal.khan42@gmail.com](mailto:mdanyal.khan42@gmail.com) |
| LinkedIn | [/mdanyal-khan](https://www.linkedin.com/in/mdanyal-khan/) |
| GitHub | [@mdanyal-khan](https://github.com/mdanyal-khan) |
| WhatsApp | [+92 313 9709274](https://wa.me/923139709274) |

## License

No open-source license is currently included. All rights remain with Muhammad Danyal Khan unless stated otherwise.

<div align="center">

---

Designed and built by **Muhammad Danyal Khan**.

</div>
