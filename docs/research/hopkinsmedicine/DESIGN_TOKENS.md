# Johns Hopkins Medicine - Design Tokens

## Colors

| Token | Hex / Value | Usage |
|---|---|---|
| `--color-hopkins-blue` | `#002D72` | Primary brand color, header background, primary badges |
| `--color-action-blue` | `#0077C8` | Buttons, navigation links, accents, interactive arrows |
| `--color-dark-navy` | `#001C3D` / `#0A192F` | Footer background, deep text |
| `--color-teal-dark` | `#005566` | "Research at Johns Hopkins" banner background |
| `--color-alert-blue` | `#002D72` | UnitedHealthcare notice background banner |
| `--color-surface-gray` | `#F4F6F8` / `#F8FAFC` | Background for School of Medicine block and care callout |
| `--color-border-gray` | `#E2E8F0` / `#D1D5DB` | Card borders, subtle divider lines |
| `--color-accent-amber` | `#FFC20E` / `#E5A823` | Golden divider line in open navigation menu |
| `--color-text-primary` | `#222222` / `#333333` | Headings, primary text |
| `--color-text-secondary` | `#555555` / `#666666` | Card descriptions, body copy |
| `--color-white` | `#FFFFFF` | Backgrounds, text on dark banners |

## Typography

- **Headings Font:** `Noto Serif`, Georgia, serif
  - `h1`: 44px - 52px, font-weight 400, line-height 1.2
  - `h2`: 32px - 38px, font-weight 400, line-height 1.3
  - `h3`: 22px - 26px, font-weight 600, line-height 1.3
- **Body Font:** `Noto Sans`, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
  - Body default: 16px (1rem), line-height 1.5 - 1.6, color `#333333`
  - Links: 16px, font-weight 500/600, color `#0077C8`, hover underline
  - Small / captions: 13px - 14px, line-height 1.4

## Spacing Scale
- `container-max-w`: `1240px` (or `max-w-7xl` / `max-w-6xl`)
- Section vertical padding: `py-12` to `py-16` (48px - 64px)
- Grid gaps: `gap-6` to `gap-8` (24px - 32px)
- Card internal padding: `p-6` (24px)

## Shadows & Elevation
- Cards: `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08)`
- Dropdown menu: `box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15)`
- Focus rings: `ring-2 ring-[#0077C8] ring-offset-2`
