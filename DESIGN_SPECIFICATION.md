# Personal Engineering Portfolio Dashboard — Design Specification

**Project:** Personal Portfolio & Project Archive  
**Design direction:** Playful, colorful, modern, technical  
**Primary goal:** Present projects, research, open-source work, achievements, and supporting resources in one searchable, navigable portfolio.

---

## 1. Product Vision
Build a long-term personal dashboard that documents the user's engineering journey. It should feel like a living archive rather than a conventional résumé or static portfolio.

The experience should communicate three things quickly:
1. What the user builds.
2. What has been shipped, researched, or achieved.
3. Where visitors can explore the actual work: live demos, repositories, papers, presentations, and downloadable documents.

The dashboard must be extensible. New projects and milestones should be addable without redesigning the site.

---

## 2. Design Principles
- **Playful, not childish:** use confident colors, expressive typography, small visual surprises, and purposeful motion.
- **Readable first:** clear hierarchy, short summaries, strong contrast, and generous spacing.
- **Evidence-led:** every project should link to tangible evidence where available.
- **Explorable:** visitors can browse by type, technology, status, date, or theme.
- **Responsive:** desktop-first composition that adapts cleanly to tablet and mobile.
- **Maintainable:** project content should come from structured data rather than hard-coded page markup.

---

## 3. Visual Identity

### Color Palette
| Token | Color | Intended Use |
| :--- | :--- | :--- |
| `--canvas` | `#F7F3EA` | Warm off-white page background |
| `--ink` | `#20202B` | Primary text and dark surfaces |
| `--violet` | `#7856FF` | Primary accent, links, active states |
| `--lime` | `#D9F36A` | Highlight panels and status accents |
| `--coral` | `#FF806B` | Secondary accent and featured labels |
| `--cyan` | `#55C9D9` | Technical/category accents |
| `--surface` | `#FFFFFF` | Cards and content surfaces |
| `--muted` | `#777681` | Secondary text |
| `--line` | `#E6E0D7` | Borders and separators |

Use color in controlled blocks and accents. Avoid using every accent in every component. Maintain accessible text contrast.

### Typography
- **Display/headings:** a bold geometric sans-serif such as Space Grotesk.
- **Body:** a highly readable sans-serif such as Inter.
- **Metadata/code labels:** a monospace face such as IBM Plex Mono.
- Use large, expressive hero typography; keep descriptions compact and legible.

### Shape and Texture
- Rounded cards with a consistent radius system (12–24px).
- Occasional circular markers, sticker-like labels, dotted patterns, and simple geometric decorations.
- Use subtle shadows only when they clarify layering.
- Avoid excessive glassmorphism, gradients, or decorative elements that compete with project content.

### Motion
- Short hover transitions (150–220ms).
- Small lift or border-color change on interactive cards.
- Animated timeline/hero details only when they do not distract.
- Respect `prefers-reduced-motion`.

---

## 4. Information Architecture
Primary navigation:
1. **Home** — introduction, featured work, summary metrics.
2. **Archive** — complete searchable project and work library.
3. **Timeline** — chronological milestones and project activity.
4. **Featured** — selected projects with deeper case studies.
5. **Research & Open Source** — papers, technical experiments, libraries, and repositories.
6. **Achievements** — hackathons, competitions, leadership, and milestones.
7. **About** — education, skills, experience, and contact.

A persistent top navigation should include the site mark/name, section links, and a clear contact or résumé action. On mobile, collapse navigation into an accessible menu.

---

## 5. Page Layout and Components

### 5.1 Hero / Home
**Purpose:** establish identity and direct visitors into the archive.

**Content:**
- Name and concise role statement.
- One-sentence positioning statement focused on building useful engineering products.
- Primary CTA: Explore projects.
- Secondary CTA: View résumé or Contact.
- Compact metric cards, populated only with verified values:
  - Projects
  - Open-source libraries
  - Research / papers
  - Achievements

**Visual treatment:**
- Large heading aligned to a colorful abstract shape or modular illustration.
- One contrasting highlight panel (lime or violet).
- Avoid inventing counts; calculate metrics from the project data.

### 5.2 Project Archive
**Purpose:** provide a complete, searchable record of work.

**Controls:**
- Search by project name, summary, technology, or tag.
- Filter by work type: Product, Research, Open Source, Hardware, Competition, Coursework.
- Filter by status: Live, In Progress, Archived, Research.
- Filter by technology.
- Sort by newest, oldest, or featured.
- Clear-all filters action.
- Result count and useful empty state.

**Project card fields:**
- Project title.
- Short description (1–3 sentences).
- Work type and current status.
- Technology tags.
- Date or date range.
- Optional thumbnail, diagram, or screenshot.
- Available resource indicators: Live, GitHub, Paper, Report, Demo.

**Card interaction:**
- Entire card opens the project detail view.
- Individual resource links remain separately accessible.
- Use visible focus states and keyboard navigation.

### 5.3 Project Detail View
Every project should have a dedicated detail page or modal with:
1. **Overview** — problem, intended users, and solution.
2. **Role** — what the user personally designed, built, or led.
3. **Architecture** — system diagram and key technical decisions.
4. **Stack** — languages, frameworks, hardware, and infrastructure.
5. **Outcomes** — verified metrics, results, and lessons.
6. **Media** — screenshots, demo videos, diagrams, or photos.
7. **Resources** — live site, source repository, paper, report, presentation, and other files.
8. **Related work** — projects sharing technologies or themes.

*Do not present team accomplishments as individual work. Clearly distinguish personal contribution from team contribution.*

### 5.4 Timeline
- Group entries by year and month.
- Use a vertical timeline on desktop and a compact chronological list on mobile.
- Each entry includes date, title, category, short description, and a link to the relevant project.
- Support undated milestones in a separate "No fixed date" group.
- Avoid fabricating exact dates when only a month or year is known.

### 5.5 Featured Projects
Use larger editorial cards for a small number of high-value projects.

Suggested initial candidates, subject to user confirmation:
- NxtChaptr — circular fashion and AI-assisted product listing.
- NAViGO — intelligent dead-reckoning and multi-sensor navigation.
- ProtoLink — custom TCP/IP protocol stack.
- Selected computer vision / synthetic-data libraries.
- Selected robotics and hardware projects.

Each featured project should have a clear outcome, the user's contribution, and direct evidence links. Accurate status labeling.

### 5.6 Research & Open Source
Create separate views or filters for:
- Research papers and technical reports.
- Python packages and reusable libraries.
- GitHub repositories.
- Experiments, prototypes, and technical notes.

Each library entry should include package/repository name, purpose, installation or usage link, documentation, license, and release status when known.

### 5.7 Achievements
Organize by:
- Hackathons and competitions.
- Rankings, selections, and milestones.
- Club leadership and team roles.
- Publications, releases, and certifications.

Concise evidence-backed descriptions including event name, year, role, result, and supporting link/document.

### 5.8 About
Include:
- Short biography.
- Education.
- Technical interests.
- Skills grouped by domain.
- Leadership and collaboration experience.
- Contact links and résumé.

---

## 6. Resource Library and Local Archive
Support both external links and locally stored copies of resources.

### Resource Types
- PDF, DOC, DOCX.
- PPT, PPTX.
- XLS, XLSX, CSV.
- Images and diagrams.
- Videos or demo recordings.
- GitHub repositories and live websites.
- External articles and documentation.

### Resource Behavior
- Show file name, type, size (when available), and source.
- Provide a local download link when a local copy exists.
- Provide an external link when the original remains online.
- Record the original URL and local relative path.
- Display download/availability state: `Downloaded`, `External only`, `Unavailable`, or `Needs review`.
- Never claim a file is locally archived until verified.
- Preserve original filenames where practical; sanitize unsafe path characters.
- Avoid downloading private or login-protected material without authorization.

### Suggested Folder Structure
```
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile/
│   │   ├── projects/
│   │   └── icons/
│   └── archive/
│       ├── projects/
│       │   └── <project-slug>/
│       ├── research/
│       ├── presentations/
│       ├── reports/
│       └── certificates/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── styles/
│   └── utils/
├── scripts/
│   └── archive-resources.py
└── README.md
```

---

## 7. Content Model
Store projects as structured records:
```json
{
  "id": "nav-001",
  "slug": "navigo",
  "title": "NAViGO",
  "summary": "AI/ML-based dead-reckoning and multi-sensor navigation system.",
  "type": "Research",
  "status": "In Progress",
  "featured": true,
  "startDate": "2026-01",
  "endDate": null,
  "technologies": ["Python", "NumPy", "PyTorch", "EKF"],
  "themes": ["AI/ML", "Robotics", "Navigation"],
  "role": "Add verified individual contribution here.",
  "outcomes": [],
  "resources": [
    {
      "label": "Source repository",
      "kind": "github",
      "url": "",
      "localPath": null,
      "archiveStatus": "External only"
    }
  ],
  "media": []
}
```

Recommended top-level collections:
- `projects`
- `milestones`
- `publications`
- `libraries`
- `skills`
- `resources`
- `profile`

---

## 8. Interaction and Accessibility Requirements
- All controls must work; no decorative buttons implying unavailable actions.
- Search and filters should combine predictably.
- Provide keyboard-accessible navigation and visible focus indicators.
- Use semantic headings, landmarks, labels, and button elements.
- Add descriptive alt text to meaningful images.
- Ensure sufficient color contrast.
- Provide reduced-motion support.
- Make external links identifiable and open safely.
- Ensure cards remain usable on touch screens.
- Include loading, empty, and error states for resource previews.

---

## 9. Responsive Behavior
- **Desktop (≥ 1100px):** Full horizontal navigation, main content max-width 1200–1360px, 3-column project archive, 2-column hero.
- **Tablet (700–1099px):** Compact navigation, 2-column archive, reduced hero typography.
- **Mobile (< 700px):** Collapsible navigation, single-column cards, drawer/chip filters, vertical list timeline, comfortable touch targets, no horizontal overflow.

---

## 10. Suggested Implementation
- **Frontend:** React / Next.js or Vite + React
- **Styling:** Tailwind CSS or CSS modules with custom design tokens (`--canvas`, `--ink`, `--violet`, `--lime`, `--coral`, `--cyan`, `--surface`, etc.)
- **Content:** Structured JSON / TypeScript data
- **Search & Filters:** Client-side reactive filtering and sorting
- **Build order:**
  1. Design tokens and responsive shell.
  2. Navigation and hero.
  3. Structured project/coursework data.
  4. Archive cards, search, filters, and sorting.
  5. Project/module detail views & modals.
  6. Timeline and featured projects.
  7. Resource library and downloads.
  8. Research, coursework, achievements, and about sections.
  9. Accessibility, responsiveness, and polish.

---

## 11. Acceptance Criteria
- All primary navigation destinations work.
- Cards are generated from structured data.
- Search, filters, sorting, and reset work together seamlessly.
- Every entry has an accurate status and description.
- Resource links and local downloads are verified.
- Mobile, tablet, and desktop layouts are fully responsive.
- Keyboard navigation and focus states work.
- Clean, accessible typography and contrast tokens.

