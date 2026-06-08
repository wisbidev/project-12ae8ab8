# Test Cases — Hero Section

## Happy Path Scenarios

**Scenario**: Hero renders headline, subheadline, and CTA buttons
**Given**: The landing page loads at the root URL
**When**: The Hero section is rendered
**Then**: The headline displays "AI Team. Không cần thuê dev.", the subheadline is a 1–2 sentence description of the service, and two CTA buttons ("Bắt đầu ngay" and "Xem cách hoạt động") are visible

**Scenario**: CTAs have correct links and behavior
**Given**: The Hero section is rendered with both CTA buttons
**When**: User clicks "Bắt đầu ngay"
**Then**: The browser navigates to `https://t.me/aiteam_bot`
**When**: User clicks "Xem cách hoạt động"
**Then**: The page smooth-scrolls to the element with `id="how-it-works"`

**Scenario**: Background is dark gradient with blue glow
**Given**: The Hero section is rendered
**When**: The background style is inspected
**Then**: It uses a dark gradient (`#0F172A` → `#1E293B`) with a subtle blue (`#3B82F6`) radial glow effect behind the headline

**Scenario**: Hero is fully responsive — mobile layout
**Given**: The viewport is ≤ 767px (mobile)
**When**: The Hero section is rendered
**Then**: Headline, subheadline, and CTAs stack vertically, with generous top padding and no horizontal overflow

**Scenario**: Hero is fully responsive — desktop layout
**Given**: The viewport is ≥ 768px (desktop)
**When**: The Hero section is rendered
**Then**: Content is inside a centered max-width container, with generous top padding

**Scenario**: Hero has dark background color
**Given**: The Hero section is rendered
**When**: The background color is inspected
**Then**: It uses dark background tokens (`#0F172A` / `#1E293B`) consistent with the dark mode design

**Scenario**: CTA buttons have hover effects
**Given**: The Hero section is rendered with both CTA buttons
**When**: The user hovers over either "Bắt đầu ngay" or "Xem cách hoạt động"
**Then**: The button scales to 1.05 and a brighter glow effect is applied via `transition-all duration-300`
