# Media UMKM - Visual Component Breakdown
## Flat UI Mockup Structure for Figma

### Page Structure Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        HEADER NAVIGATION                         │
│  [Logo] [Nav Links] [Sign In] [Join Now - Primary Button]      │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                         HERO SECTION                            │
│                                                                 │
│               [Large Heading Text Block]                       │
│               [Subtitle Text Block]                            │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                 SEARCH COMPONENT                        │   │
│  │  [Search Input Bar with Icon]                          │   │
│  │  [Category Dropdown] [Location Dropdown] [Slider]     │   │
│  │  [Search Button - Primary]                            │   │
│  │                                                        │   │
│  │  ┌─────────────────────────────────────────────────┐  │   │
│  │  │              INTERACTIVE MAP                    │  │   │
│  │  │  • Custom markers with sustainability colors   │  │   │
│  │  │  • Clickable popups                           │  │   │
│  │  │  • Legend (top-right)                         │  │   │
│  │  │  • Business counter (bottom-left)             │  │   │
│  │  └─────────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│          [Stat 1]    [Stat 2]    [Stat 3]                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    FEATURED UMKM SECTION                       │
│                                                                 │
│               [Section Heading]                                │
│               [Section Subtitle]                               │
│                                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │
│  │ CARD 1   │ │ CARD 2   │ │ CARD 3   │ │ CARD 4   │         │
│  │ [Image]  │ │ [Image]  │ │ [Image]  │ │ [Image]  │         │
│  │ [Title]  │ │ [Title]  │ │ [Title]  │ │ [Title]  │         │
│  │ [Rating] │ │ [Rating] │ │ [Rating] │ │ [Rating] │         │
│  │ [Badges] │ │ [Badges] │ │ [Badges] │ │ [Badges] │         │
│  │ [Button] │ │ [Button] │ │ [Button] │ │ [Button] │         │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘         │
│                                                                 │
│  ┌──────────┐ ┌──────────┐                                    │
│  │ CARD 5   │ │ CARD 6   │                                    │
│  │ [Image]  │ │ [Image]  │                                    │
│  │ [Title]  │ │ [Title]  │                                    │
│  │ [Rating] │ │ [Rating] │                                    │
│  │ [Badges] │ │ [Badges] │                                    │
│  │ [Button] │ │ [Button] │                                    │
│  └──────────┘ └──────────┘                                    │
│                                                                 │
│                [View All Button - Secondary]                   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                 SUSTAINABILITY SECTION                         │
│                                                                 │
│                    [Award Icon Circle]                         │
│                    [Section Heading]                           │
│                    [Section Subtitle]                          │
│                                                                 │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐    │
│  │  FEATURE 1     │ │  FEATURE 2     │ │  FEATURE 3     │    │
│  │  [Leaf Icon]   │ │  [Users Icon]  │ │ [Recycle Icon] │    │
│  │  [Title]       │ │  [Title]       │ │  [Title]       │    │
│  │  [Description] │ │  [Description] │ │  [Description] │    │
│  │  [Count Badge] │ │  [Count Badge] │ │  [Count Badge] │    │
│  └────────────────┘ └────────────────┘ └────────────────┘    │
│                                                                 │
│                    [CTA Text]                                  │
│                    [CTA Button - Primary]                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                   HOW IT WORKS SECTION                         │
│                                                                 │
│                    [Section Heading]                           │
│                    [Section Subtitle]                          │
│                                                                 │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    │
│  │ STEP 1  │ → │ STEP 2  │ → │ STEP 3  │ → │ STEP 4  │    │
│  │ [1]     │   │ [2]     │   │ [3]     │   │ [4]     │    │
│  │ [Icon]  │   │ [Icon]  │   │ [Icon]  │   │ [Icon]  │    │
│  │ [Title] │   │ [Title] │   │ [Title] │   │ [Title] │    │
│  │ [Desc]  │   │ [Desc]  │   │ [Desc]  │   │ [Desc]  │    │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │              WEBGIS HIGHLIGHT SECTION               │  │
│  │                                                         │  │
│  │               [Large MapPin Icon]                      │  │
│  │               [Feature Title]                          │  │
│  │               [Feature Description]                    │  │
│  │                                                         │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐                 │  │
│  │  │FEATURE 1│ │FEATURE 2│ │FEATURE 3│                 │  │
│  │  │[Icon]   │ │[Icon]   │ │[Icon]   │                 │  │
│  │  │[Title]  │ │[Title]  │ │[Title]  │                 │  │
│  │  │[Desc]   │ │[Desc]   │ │[Desc]   │                 │  │
│  │  └─────────┘ └─────────┘ └─────────┘                 │  │
│  │                                                         │  │
│  │     [Explore Map - Primary] [Learn More - Secondary]  │  │
│  └─────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                   TESTIMONIALS SECTION                         │
│                                                                 │
│                    [Quote Icon Circle]                         │
│                    [Section Heading]                           │
│                    [Section Subtitle]                          │
│                                                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐          │
│  │ TESTIMONIAL 1│ │ TESTIMONIAL 2│ │ TESTIMONIAL 3│          │
│  │ [Quote Icon] │ │ [Quote Icon] │ │ [Quote Icon] │          │
│  │ [★★★★★]      │ │ [★★★★★]      │ │ [★★★★★]      │          │
│  │ [Quote Text] │ │ [Quote Text] │ │ [Quote Text] │          │
│  │ [Avatar]     │ │ [Avatar]     │ │ [Avatar]     │          │
│  │ [Name]       │ │ [Name]       │ │ [Name]       │          │
│  │ [Location]   │ │ [Location]   │ │ [Location]   │          │
│  └──────────────┘ └──────────────┘ └──────────────┘          │
│                                                                 │
│          [4.9/5]    [10,000+]    [500+]    [50+]              │
│       [Avg Rating] [Customers] [Businesses] [Cities]          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                           FOOTER                               │
│                                                                 │
│  ┌─────────────┐                                              │
│  │ BRAND COL   │  [Platform] [Business] [Support] [Company]   │
│  │ [Logo+Icon] │   Links      Links      Links     Links     │
│  │ [Desc Text] │   Column     Column     Column    Column    │
│  │ [Contact]   │                                              │
│  └─────────────┘                                              │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │              NEWSLETTER SIGNUP                          │  │
│  │  [Title + Desc]    [Email Input] [Subscribe Button]   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  [Copyright] [Legal Links] [Social Media Icons]               │
└─────────────────────────────────────────────────────────────────┘
```

### Component Atomic Design

#### Atoms (Basic Elements)
```
Text Elements:
- Heading 1, 2, 3 (with color variants)
- Body Large, Medium, Small
- Caption text
- Button text

Interactive Elements:
- Primary Button
- Secondary Button  
- Icon Button
- Link text
- Form inputs (text, select, range)

Visual Elements:
- Icons (24 different types)
- Avatar (circular, 48px/100px)
- Badge (sustainability, category)
- Divider lines
- Shadows (3 levels)

Colors:
- Green system (3 shades)
- Neutral grays (4 shades)
- Status colors (success, warning, error)
```

#### Molecules (Component Combinations)
```
Navigation:
- Logo + Text
- Nav Link Group
- Button Group (Sign In + Join Now)
- Mobile Menu Toggle

Form Components:
- Search Input (Icon + Input)
- Filter Row (3 dropdowns + slider)
- Newsletter Signup (Input + Button)

Content Blocks:
- Stat Display (Number + Label)
- Feature Item (Icon + Title + Description)
- Rating Display (Stars + Number + Count)
- Contact Info (Icon + Text)

Map Elements:
- Custom Marker (Circle + Score)
- Map Legend (Title + Legend Items)
- Business Counter (Label + Number)
- Map Popup (Image + Content + Button)
```

#### Organisms (Complex Components)
```
Header Navigation:
- Logo + Navigation + Buttons
- Mobile responsive with hamburger menu

Search Component:
- Input + Filters + Map + Button
- Real-time filtering capability

Business Card:
- Image + Content + Metadata + Actions
- Hover states and interactions

Map Component:
- Map Container + Markers + Controls + Legend
- Interactive popups and filtering

Section Headers:
- Icon + Title + Subtitle + Description
- Centered alignment with spacing

Footer:
- Brand + Link Columns + Newsletter + Legal
- Multi-column responsive layout
```

### Figma Auto-Layout Structure

#### Component Properties
```
Button Component:
- Variant: Primary, Secondary, Icon
- Size: Small (40px), Medium (48px), Large (56px)
- State: Default, Hover, Active, Disabled
- Icon: Boolean (show/hide)
- Text: String

Card Component:
- Type: Business, Feature, Testimonial
- Image: Boolean (show/hide)
- Badge: Boolean (show/hide)
- Rating: Boolean (show/hide)
- Actions: Boolean (show/hide)

Header Component:
- Logo: String
- Navigation: Boolean (show/hide)
- Mobile: Boolean (collapsed/expanded)

Input Component:
- Type: Text, Select, Range
- Label: Boolean (show/hide)
- Icon: Boolean (show/hide)
- State: Default, Focus, Error
```

#### Responsive Breakpoints
```
Desktop (1200px+):
- 12-column grid
- Full navigation visible
- 4-column card layouts
- Large map component

Tablet (768px - 1199px):
- 8-column grid  
- Condensed navigation
- 2-column card layouts
- Medium map component

Mobile (< 768px):
- Single column layout
- Hamburger navigation
- Stacked card layouts
- Compact map component
```

### Design Tokens for Figma

#### Spacing Tokens
```
Space/XS: 8px
Space/SM: 16px  
Space/MD: 24px
Space/LG: 32px
Space/XL: 48px
Space/2XL: 64px
Space/3XL: 96px

Component Spacing:
- Button padding: 14px 24px
- Card padding: 24px
- Section padding: 64px 0
- Container max-width: 1200px
- Container padding: 0 24px
```

#### Border Radius Tokens
```
Radius/SM: 4px (small elements)
Radius/MD: 8px (inputs, small cards)
Radius/LG: 12px (cards, containers)
Radius/XL: 16px (large cards, sections)
Radius/2XL: 24px (hero elements)
Radius/Full: 9999px (buttons, badges)
```

#### Shadow Tokens
```
Shadow/SM: 0 1px 2px rgba(0,0,0,0.05)
Shadow/MD: 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)
Shadow/LG: 0 4px 12px rgba(0,0,0,0.1)
Shadow/XL: 0 8px 24px rgba(0,0,0,0.15)

Button Shadow/Hover: 0 4px 8px rgba(148,242,127,0.3)
```

This structure provides complete component separation optimized for Figma's component system with proper auto-layout, variants, and responsive design capabilities.