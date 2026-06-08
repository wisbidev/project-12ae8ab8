# Software Requirements Specification — aiteam Landing Page

## 1. Overview

A single-page dark-mode landing website in Vietnamese that introduces **aiteam** — an AI-powered platform that automatically builds software through Telegram conversations. The page follows a modern SaaS layout with 7 sections, built with Next.js + Tailwind CSS + Framer Motion, mobile-first responsive.

**Goal**: Convert visitors into Telegram CTA clicks by clearly explaining the autonomous AI engineering pipeline.

## 2. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Language | Vietnamese (vi) |
| Deployment | (TBD — Vercel recommended) |

## 3. Design

**Figma:** No Figma file available. See attached spec below.

**Colors:**
| Token | Hex |
|-------|-----|
| Primary | `#3B82F6` |
| Background | `#0F172A` |
| Surface | `#1E293B` |
| Muted | `#94A3B8` |
| Text | `#F8FAFC` |

**Pages/Sections:**
1. **Hero** — Headline + 2 CTAs + dark gradient background with blue glow
2. **How It Works** — 5-step timeline/step cards
3. **AI Agents** — 4 role cards (PM, TL, Dev, TestLead)
4. **Features** — 6-item feature grid
5. **Tech Stack** — 6 tech badges
6. **Final CTA + Footer** — Headline + button + Telegram/GitHub links

## 4. Functional Requirements

### FR-1: Hero Section

**Title:** "Hero Section — Headline, subheadline, 2 CTA buttons, dark gradient background, glow hiệu ứng xanh lam"

**Acceptance criteria:**
- Headline text: **"AI Team. Không cần thuê dev."**
- Subheadline: 1–2 sentences explaining the service (e.g. "Mô tả ngắn nền tảng AI build phần mềm tự động qua Telegram")
- CTA button 1: **"Bắt đầu ngay"** — links to Telegram (placeholder: `https://t.me/aiteam_bot`)
- CTA button 2: **"Xem cách hoạt động"** — smooth scrolls to #how-it-works section
- Background: dark gradient (`#0F172A` → `#1E293B`) with a subtle blue (`#3B82F6`) radial glow effect behind the headline
- Fully responsive: headline stacks vertically on mobile, side-by-side on desktop
- Max-width container centered, top padding generous

### FR-2: How It Works (Pipeline) Section

**Title:** "How It Works — 5-step timeline cards từ ý tưởng → deploy"

**Acceptance criteria:**
- Section title: **"Từ ý tưởng đến deploy hoàn toàn tự động"**
- 5 steps displayed as horizontal/vertical timeline cards, each with:
  - Step number (1–5)
  - Icon (SVG or emoji)
  - Short description (1 line per step)
- Steps content:
  1. 📝 **Gửi ý tưởng** — Mô tả ý tưởng qua Telegram
  2. 📋 **Lên kế hoạch** — AI PM phân tích và lập plan
  3. 🎨 **Thiết kế** — AI tạo design và SRS
  4. ⚙️ **Build & Test** — Dev + TestLead coding tự động
  5. 🚀 **Deploy** — Hoàn thiện và deploy sản phẩm
- Each card animates in on scroll (fade-in + slide-up via Framer Motion)
- Responsive: vertical timeline on mobile, horizontal on desktop (≥md)
- Section has `id="how-it-works"` for anchor scrolling from Hero

### FR-3: AI Agents Section

**Title:** "AI Agents — 4 cards: PM, TL, Dev, TestLead"

**Acceptance criteria:**
- Section title: **"4 AI Agents vận hành như engineering team thật"**
- 4 agent cards in a responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
- Each card contains:
  - Agent avatar/icon (simple SVG or emoji)
  - Agent role name: **PM**, **TL**, **Dev**, **TestLead**
  - 3 task bullet points per role:
    - **PM:** Lập kế hoạch — Phân tích yêu cầu — Theo dõi tiến độ
    - **TL:** Thiết kế kiến trúc — Review code — Merge PR
    - **Dev:** Viết code — Tối ưu hiệu năng — Fix bug
    - **TestLead:** Viết test case — Kiểm thử tự động — Đảm bảo chất lượng
- Cards have a subtle surface (`#1E293B`) background with border and hover glow effect
- Consistent card height across the grid

### FR-4: Features Section

**Title:** "Features — 6 features grid with hover glow"

**Acceptance criteria:**
- Section title: **"Tự động hóa toàn bộ quy trình phát triển phần mềm"**
- 6 feature items arranged in a grid (1 col mobile, 2 col tablet, 3 col desktop)
- Each item has:
  - Icon (SVG or emoji)
  - Title (bold, 1 line)
  - Description (1 line, muted text)
- Feature items:
  1. 🤖 **AI tự động** — Không cần quản lý team, AI lo tất cả
  2. ⚡ **Build nhanh** — Từ ý tưởng đến sản phẩm trong vài giờ
  3. 🎯 **Chính xác** — Code chất lượng, test tự động đảm bảo
  4. 💬 **Giao tiếp Telegram** — Quản lý dự án qua chat đơn giản
  5. 🔧 **Tùy chỉnh linh hoạt** — Sửa đổi feature bất cứ lúc nào
  6. 🚀 **Deploy tự động** — CI/CD pipeline sẵn sàng production
- Hover effect: blue glow outline/shadow (`#3B82F6`) + slight scale
- Card background `#1E293B` with rounded corners

### FR-5: Tech Stack Section

**Title:** "Tech Stack — 6 tech badges"

**Acceptance criteria:**
- Section title: **"Stack hiện đại, sẵn sàng production"**
- 6 tech items displayed as icon badges in a flex grid:
  1. Next.js (official icon)
  2. Go (official icon)
  3. PostgreSQL (official icon)
  4. Tailwind CSS (official icon)
  5. GitHub Actions (official icon)
  6. Docker (official icon)
- Each badge shows: tech icon + name below
- Flexible layout: 3 per row on desktop, 2 on tablet, 1 on mobile
- Badges have subtle surface background and border
- Icons sourced from simple SVG or `react-icons`

### FR-6: Final CTA Section + Footer

**Title:** "Final CTA + Footer"

**Acceptance criteria:**
- CTA section:
  - Headline: **"Bắt đầu build sản phẩm với AI team"**
  - Subheadline: 1 line description encouraging action
  - Button: **"Chat qua Telegram"** — links to Telegram (same placeholder URL)
  - Background: prominent blue gradient or glow to draw attention
- Footer:
  - Logo: "aiteam" text logo
  - Telegram link icon + URL
  - GitHub link icon + URL (placeholder)
  - Copyright line: `© 2025 aiteam. All rights reserved.`
  - Muted text color (`#94A3B8`), smaller font
- Section has `id="final-cta"` for potential anchor links

### FR-7: Animations & Polish

**Title:** "Animations & Polish — Framer Motion, responsive checks, mobile-first"

**Acceptance criteria:**
- Framer Motion animations:
  - Fade-in + slide-up on scroll for each section (use `whileInView`)
  - Hero: immediate entrance animation on load
  - Step cards in How It Works: staggered entrance
  - Agent cards and feature cards: staggered grid entrance
- Hover effects:
  - Buttons: scale 1.05 + brighter glow
  - Cards (features, agents): blue glow box-shadow on hover
  - Links: color transition to primary blue
- Smooth transitions:
  - CTA button hover: background → brighter shade of `#3B82F6`
  - All interactive elements: `transition-all duration-300`
- Responsive:
  - All sections pass visual check on 320px, 480px, 768px, 1024px, 1440px widths
  - No horizontal overflow, no text clipping
  - Touch targets ≥44px on mobile
  - Navigation/spacing adapts without breakage
- Performance: `use client` only where animation/interactivity is needed; static content as server components where possible

## 5. Constraints

- Language: Vietnamese throughout
- No backend or API calls — purely static landing page
- No authentication, no forms, no data persistence
- All links are placeholders or smooth-scroll anchors
- No external dependencies beyond Next.js, Tailwind CSS, Framer Motion, and `react-icons` (or inline SVGs)

## 6. Non-functional Requirements

- **Performance:** Lighthouse score ≥90 on mobile for Performance, Accessibility, Best Practices
- **Responsiveness:** Mobile-first, tested across breakpoints 320px–1440px
- **SEO:** Proper `<head>` meta tags, Open Graph preview, Vietnamese lang attribute
- **Accessibility:** Semantic HTML (`<section>`, `<nav>`, `<footer>`), alt text on icons, sufficient contrast ratios
