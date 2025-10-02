# Media UMKM - Figma Design Specification
## Flat UI Mockup with Editable Layers

### Design System Foundation

#### Color Palette
```
Primary Colors:
- Green Primary: #8FEC78 (Main CTA, accent elements)
- Green Strong: #81DD67 (Hover states, secondary accents)  
- Green Text: #0D7916 (Link text, sustainability scores)
- Blue Accent: #3B82F6 (Trust elements, secondary CTAs)

Neutral Colors:
- Text Primary: #003720 (Headlines, important text)
- Text Body: #0E0F0C (Body text, descriptions)
- Text Secondary: #83928C (Supporting text, captions)
- Text Muted: #AFB7B4 (Timestamps, subtle text)

Background Colors:
- White: #FFFFFF (Main background, cards)
- Section BG: rgba(0,0,0,0.02) (Section backgrounds)
- Accent Wash: rgba(148,242,127,0.1) (Subtle highlights)

Border Colors:
- Light: rgba(0,0,0,0.1) (Card borders, separators)
- Medium: rgba(0,0,0,0.2) (Form borders)
- Strong: rgba(0,0,0,0.3) (Emphasized borders)
```

#### Typography System
```
Font Family: System UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'

Heading 1 (Hero Title):
- Size: 72px (Desktop) / 36px (Mobile)
- Weight: 700 (Bold)
- Line Height: 0.9
- Letter Spacing: -0.02em
- Color: #003720

Heading 2 (Section Titles):
- Size: 48px (Desktop) / 30px (Mobile)  
- Weight: 600 (SemiBold)
- Line Height: 0.95
- Letter Spacing: -0.015em
- Color: #003720

Heading 3 (Card Titles):
- Size: 24px (Desktop) / 20px (Mobile)
- Weight: 600 (SemiBold)
- Line Height: 1.2
- Letter Spacing: -0.01em
- Color: #003720

Body Large (Subtitles):
- Size: 20px (Desktop) / 18px (Mobile)
- Weight: 400 (Regular)
- Line Height: 1.6
- Color: #0E0F0C

Body Medium (Regular Text):
- Size: 18px (Desktop) / 16px (Mobile)
- Weight: 400 (Regular)
- Line Height: 1.5
- Color: #0E0F0C

Body Small (Supporting Text):
- Size: 14px
- Weight: 400 (Regular)
- Line Height: 1.4
- Color: #83928C

Caption (Meta Text):
- Size: 12px
- Weight: 400 (Regular)
- Line Height: 1.3
- Color: #AFB7B4

Button Text:
- Size: 16px
- Weight: 600 (SemiBold)
- Line Height: 1.3
```

#### Spacing System
```
XS: 8px
SM: 16px
MD: 24px
LG: 32px
XL: 48px
2XL: 64px
3XL: 96px
```

### Component Library

#### 1. Navigation Header
```
Layer Structure:
├── Header Container
    ├── Background (White, opacity 60%, backdrop-blur 16px)
    ├── Border (1px solid rgba(0,0,0,0.1))
    ├── Logo Container
    │   └── Text: "Media UMKM" (20px, #003720, SemiBold)
    ├── Navigation Links Container
    │   ├── Link: "Discover" (16px, #AFB7B4, Medium)
    │   ├── Link: "Categories" (16px, #AFB7B4, Medium)
    │   ├── Link: "How It Works" (16px, #AFB7B4, Medium)
    │   └── Link: "About" (16px, #AFB7B4, Medium)
    └── Button Group
        ├── Secondary Button: "Sign In"
        └── Primary Button: "Join Now"

Dimensions:
- Height: 56px
- Padding: 8px 24px
- Border Radius: 9999px (full rounded)
- Margin: 24px (all sides)
- Position: Fixed, top

States:
- Default
- Mobile (collapsed navigation)
```

#### 2. Primary Button
```
Layer Structure:
├── Button Container
    ├── Background (Linear gradient: #8FEC78 to #81DD67)
    ├── Text Layer (White, 16px, SemiBold)
    └── Icon Layer (if applicable, 18px)

Dimensions:
- Height: 48px
- Padding: 14px 24px
- Border Radius: 9999px (pill shape)
- Min Width: 120px

States:
- Default: Gradient background, white text
- Hover: Scale 1.02, shadow 0 4px 8px rgba(148,242,127,0.3)
- Active: Scale 0.98
- Disabled: Opacity 0.6
```

#### 3. Secondary Button
```
Layer Structure:
├── Button Container
    ├── Background (Transparent)
    ├── Border (1px solid rgba(0,0,0,0.1))
    ├── Text Layer (#003720, 16px, Medium)
    └── Icon Layer (if applicable, 18px)

Dimensions:
- Height: 48px
- Padding: 14px 24px
- Border Radius: 9999px (pill shape)
- Min Width: 120px

States:
- Default: White background, gray border
- Hover: Background rgba(0,0,0,0.05), border rgba(0,0,0,0.2)
- Active: Scale 0.98
```

#### 4. Business Card
```
Layer Structure:
├── Card Container
    ├── Background (White #FFFFFF)
    ├── Border (1px solid rgba(0,0,0,0.1))
    ├── Shadow (0 1px 3px rgba(0,0,0,0.1))
    ├── Business Image Container
    │   ├── Image (400x300px, object-cover)
    │   ├── Category Badge (top-left)
    │   └── Sustainability Badge (top-right)
    ├── Content Container
    │   ├── Title (18px, #003720, SemiBold)
    │   ├── Location Row
    │   │   ├── MapPin Icon (14px, #83928C)
    │   │   └── Location Text (14px, #83928C)
    │   ├── Description (14px, #83928C, line-height 1.4)
    │   ├── Rating Row
    │   │   ├── Star Icon (14px, #F59E0B)
    │   │   ├── Rating Number (14px, #003720, Medium)
    │   │   └── Review Count (14px, #AFB7B4)
    │   ├── Badges Container
    │   │   └── Multiple Badge Components
    │   └── Button Container
    │       ├── Primary Button: "Visit Business"
    │       └── Icon Button: Heart (48x48px)

Dimensions:
- Width: 350px (flexible)
- Padding: 24px
- Border Radius: 12px
- Image Height: 192px

States:
- Default
- Hover: translateY(-2px), shadow 0 4px 12px rgba(0,0,0,0.1)
```

#### 5. Search Component
```
Layer Structure:
├── Search Container
    ├── Background (White #FFFFFF)
    ├── Border (1px solid rgba(0,0,0,0.1))
    ├── Shadow (0 4px 12px rgba(0,0,0,0.15))
    ├── Search Input Row
    │   ├── Search Icon (20px, #AFB7B4)
    │   └── Input Field (placeholder text, 16px)
    ├── Filters Row Container
    │   ├── Category Dropdown
    │   │   ├── Label (12px, #83928C, Medium)
    │   │   └── Select (16px, full width)
    │   ├── Location Dropdown
    │   │   ├── MapPin Icon + Label (12px, #83928C, Medium)
    │   │   └── Select (16px, full width)
    │   └── Sustainability Slider
    │       ├── Leaf Icon + Label (12px, #83928C, Medium)
    │       ├── Range Input (green gradient track)
    │       └── Value Display (12px, #0D7916, Medium)
    └── Search Button (Primary style)

Dimensions:
- Width: 100% (max 800px)
- Padding: 24px
- Border Radius: 16px
- Input Height: 48px
- Gap between elements: 16px
```

#### 6. Map Component
```
Layer Structure:
├── Map Container
    ├── Background (White #FFFFFF)
    ├── Border (1px solid rgba(0,0,0,0.1))
    ├── Map Viewport
    │   ├── Tile Layer (OpenStreetMap)
    │   ├── Marker Layer
    │   │   └── Custom Markers (sustainability colored)
    │   └── Popup Layer
    ├── Legend Container (top-right)
    │   ├── Background (White, shadow)
    │   ├── Title: "Legend" (12px, #AFB7B4)
    │   └── Legend Items
    │       ├── High Sustainability (green dot + text)
    │       ├── Medium Sustainability (yellow dot + text)
    │       └── Low Sustainability (red dot + text)
    └── Counter Container (bottom-left)
        ├── Background (White, shadow)
        ├── Label: "Showing" (12px, #AFB7B4)
        └── Count: "X businesses" (14px, #003720, SemiBold)

Dimensions:
- Height: 384px
- Border Radius: 16px
- Legend: 120px width, 8px padding
- Counter: 100px width, 8px padding
```

### Page Layout Structure

#### Hero Section
```
Layer Hierarchy:
├── Hero Section Container (full viewport height)
    ├── Background Layer
    │   ├── Gradient Overlay (radial gradients)
    │   └── Map Background (30% opacity with blur overlay)
    ├── Content Container (centered, max-width 800px)
    │   ├── Hero Title
    │   ├── Hero Subtitle  
    │   ├── Search Component (enhanced with map)
    │   └── Stats Row
    │       ├── Stat 1: "500+ Mapped Businesses"
    │       ├── Stat 2: "50+ Cities Covered"  
    │       └── Stat 3: "10k+ Map Views"

Spacing:
- Top padding: 112px (header height + buffer)
- Bottom padding: 48px
- Content padding: 0 24px
- Gap between elements: 32px
```

#### Featured UMKM Section  
```
Layer Hierarchy:
├── Section Container
    ├── Background (White #FFFFFF)
    ├── Section Header
    │   ├── Title: "Featured Local Businesses"
    │   └── Subtitle (centered, max-width 600px)
    ├── Cards Grid Container
    │   └── Business Cards (6-8 cards, responsive grid)
    └── View More Button (centered)

Spacing:
- Section padding: 64px 0
- Content padding: 0 24px
- Header margin bottom: 48px
- Grid gap: 32px 24px
- Button margin top: 48px
```

#### Sustainability Section
```
Layer Hierarchy:
├── Section Container  
    ├── Background (rgba(0,0,0,0.02))
    ├── Section Header
    │   ├── Award Icon (32px in green circle)
    │   ├── Title: "Sustainability at the Heart"
    │   └── Subtitle
    ├── Features Grid (3 columns)
    │   ├── Feature Card 1: Eco-Friendly
    │   ├── Feature Card 2: Local Workers
    │   └── Feature Card 3: Green Operations
    └── CTA Container
        ├── Description text
        └── Primary Button with Leaf icon

Spacing:
- Section padding: 64px 0
- Header margin bottom: 48px  
- Grid gap: 32px
- CTA margin top: 48px
```

#### How It Works Section
```
Layer Hierarchy:
├── Section Container
    ├── Background (White #FFFFFF)
    ├── Section Header
    │   ├── Title: "How Our WebGIS Platform Works"
    │   └── Subtitle
    ├── Steps Grid (4 columns, responsive)
    │   ├── Step Card 1: Discover
    │   ├── Step Card 2: Explore  
    │   ├── Step Card 3: Connect
    │   └── Step Card 4: Support
    └── WebGIS Highlight Section
        ├── Background (gradient: green wash to blue wash)
        ├── MapPin Icon (large, centered)
        ├── Title: "Powered by Advanced WebGIS Technology"
        ├── Description
        ├── Features Grid (3 mini-cards)
        └── Button Group (2 buttons)

Spacing:
- Section padding: 64px 0
- Steps grid gap: 24px
- Highlight section padding: 48px 32px
- Highlight margin top: 64px
```

### Asset Requirements

#### Icons (Lucide React)
```
Navigation: Menu, X
Search: Search, MapPin, Leaf  
Business: Star, Users, Recycle, Heart
Map: MapPin with custom styling
Social: Facebook, Twitter, Instagram, LinkedIn
UI: ArrowRight, Award, Quote
```

#### Images
```
Business Photos:
- Format: JPG/WebP
- Dimensions: 400x300px
- Aspect ratio: 4:3
- Optimization: Progressive loading

User Avatars:
- Format: JPG/WebP  
- Dimensions: 100x100px
- Aspect ratio: 1:1
- Style: Circular crop

Fallback Images:
- Placeholder for missing business photos
- Default avatar for testimonials
```

#### Map Assets
```
Custom Markers:
- SVG format for scalability
- Color variants: Green (#8FEC78), Yellow (#F59E0B), Red (#EF4444)
- Size: 30x30px
- Include sustainability score text overlay

Map Tiles:
- OpenStreetMap (free)
- Alternative: MapBox (requires API key)
```

### Responsive Breakpoints

```
Mobile: 0-767px
Tablet: 768-1023px  
Desktop: 1024px+

Key Responsive Changes:
- Navigation: Hamburger menu on mobile
- Grid layouts: Single column on mobile
- Typography: Smaller font sizes on mobile
- Map height: Reduced on mobile (256px vs 384px)
- Button widths: Full width on mobile
- Padding/margins: Reduced spacing on mobile
```

### Animation Specifications

```
Micro-interactions:
- Button hover: transform scale(1.02), duration 200ms
- Card hover: translateY(-2px), duration 200ms  
- Loading states: Skeleton placeholders
- Map markers: Bounce animation on click

Page transitions:
- Fade in: opacity 0 to 1, duration 500ms
- Slide up: translateY(20px) to 0, duration 500ms
- Stagger children: delay 100ms between elements

Performance:
- Use CSS transforms over position changes
- Prefer opacity/transform for animations
- Implement reduced-motion preferences
```

### Figma Layer Organization

```
📁 Media UMKM Design System
├── 🎨 Colors (Color styles)
├── 📝 Typography (Text styles)  
├── 🔧 Components
│   ├── Buttons
│   ├── Cards  
│   ├── Forms
│   ├── Navigation
│   └── Map Elements
├── 📱 Pages
│   ├── Desktop
│   ├── Tablet
│   └── Mobile
├── 🖼️ Assets
│   ├── Icons
│   ├── Images
│   └── Illustrations
└── 📐 Layout Grids
    ├── 12-column Grid
    └── 8px Baseline Grid
```

This specification provides complete layer separation and component organization optimized for Figma prototyping with editable, reusable components.