# EWEM Dashboard — Electronic Waste & Environmental Management Archive

An evidence-led, playful, colorful, modern, and technical personal dashboard archiving all coursework, research, and deployed tools for the **Electronic Waste & Environmental Management (EWEM)** curriculum.

Built according to the **Personal Engineering Portfolio Dashboard Design Specification**.

---

## 🎨 Visual Identity & Design Tokens

Designed with confident blocks of color, rounded cards (14–24px radius), sticker-like labels, crisp typography, and purposeful motion:

| Token | Hex | Role |
| :--- | :--- | :--- |
| `--canvas` | `#F7F3EA` | Warm off-white page background |
| `--ink` | `#20202B` | Deep ink text & primary dark surfaces |
| `--violet` | `#7856FF` | Electric violet accent, primary buttons, active states |
| `--lime` | `#D9F36A` | Volt lime highlights & status tags |
| `--coral` | `#FF806B` | Warm coral accent & ISA badges |
| `--cyan` | `#55C9D9` | Technical cyan badges & secondary highlights |
| `--surface`| `#FFFFFF` | Content card surfaces |
| `--muted`  | `#777681` | Secondary text |
| `--line`   | `#E6E0D7` | Borders and dividers |

### Typography
- **Headings & Display**: `Space Grotesk` (bold geometric sans-serif)
- **Body & Prose**: `Inter` (high-readability neutral sans-serif)
- **Code & Metadata**: `IBM Plex Mono` (monospace labels, tags, and metrics)

---

## 📂 Project Architecture

```
E-waste Dashboard/
├── index.html               # Main single-page application shell
├── styles.css               # Design-system CSS with tokens & dark mode
├── data.js                  # Structured dataset for all 11 submissions & 4 live tools
├── app.js                   # Reactive filtering, circuit SVG, modal, and timeline engine
├── DESIGN_SPECIFICATION.md  # Complete design specification document
├── thumbs/                  # 11 webp image covers for submissions
└── files/                   # Downloadable reports, spreadsheets, slides, and campaign videos
```

---

## 🚀 Key Features

1. **Interactive Circuit & PCB Visualizer**: An SVG PCB mandala in the Hero section with 11 interactive node pins. Hovering or clicking any node displays its details in the HUD and opens the record.
2. **Submissions Archive with Reactive Filters**:
   - Filter by assessment (`All`, `ISA · 4`, `ESE · 7`).
   - Filter by thematic pillar (`Evidence · 4`, `Recovery · 2`, `Adoption · 5`).
   - Instant search across titles, tags, materials, and file names.
3. **Four Live Production Tools Showcase**:
   - **MP E-Waste Command Center**: 20-district intelligence dashboard (`mp-ewaste-buddy.lovable.app`).
   - **Circuit & Salvage**: EPR target calculator for 5 electronics giants under 2022 rules (`ewastecalc-98.netlify.app`).
   - **Formal vs Informal Dashboard**: Dual-sector comparative analysis (`edashb.netlify.app`).
   - **Green Building Scorecard**: 10-facility LEED/IGBC rating simulator (`zippy-llama-956de9.netlify.app`).
4. **Chronological Milestone Timeline**: Month-by-month journey (Jul 2026 – Oct 2026 + in-class baseline).
5. **Interactive Record Detail Modal**:
   - High-resolution cover images.
   - Key process metrics (smelting temperatures, recovery percentages, collection rates).
   - In-modal campaign film player (HTML5 MP4).
   - Direct download links + Microsoft Office Online Web Viewer support for Word, Excel, and PowerPoint files.
   - Previous / Next navigation controls (`←` and `→` keyboard shortcuts).
6. **Resource & Evidence Library**: Centralized downloadable directory of all verified files (PDF, DOCX, XLSX, PPTX, JPEG, MP4).
7. **Full Dark Theme**: Inverts background and surface tokens gracefully while preserving accessible contrast ratios.

---

## 💻 Running Locally

Simply open `index.html` in any modern web browser, or serve it using Python or Node:

```bash
# Using Python
python -m http.server 8080

# Using Node (npx)
npx serve .
```
Then visit `http://localhost:8080` in your browser.

