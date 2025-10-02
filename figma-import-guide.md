# Media UMKM - Figma Import Guide
## Step-by-Step Recreation Instructions

### Phase 1: File Setup (5 minutes)

#### Create New Figma File
```
1. Go to Figma → Create New File
2. Rename to "Media UMKM WebGIS Platform"
3. Create pages:
   - 🎨 Design System
   - 🔧 Components  
   - 📱 Mobile
   - 💻 Desktop
   - 📋 Documentation
```

#### Set Up Artboards
```
Desktop Page:
- Frame: 1440x1024px, name "Desktop - Home"

Mobile Page: 
- Frame: 375x812px, name "Mobile - Home"

Components Page:
- Multiple small frames for component library
```

### Phase 2: Design System Setup (15 minutes)

#### Color Styles Creation
```
Go to Design System page, create color swatches:

1. Create rectangles with these colors:
   - #8FEC78 → Save as "Primary/Green"
   - #81DD67 → Save as "Primary/Green Strong"  
   - #3B82F6 → Save as "Accent/Blue"
   - #003720 → Save as "Text/Primary"
   - #0E0F0C → Save as "Text/Body"
   - #83928C → Save as "Text/Secondary"
   - #AFB7B4 → Save as "Text/Muted"
   - #FFFFFF → Save as "Background/White"
   - rgba(0,0,0,0.02) → Save as "Background/Section"

2. For each rectangle:
   - Select fill → Click style icon → Create style
   - Name using the convention above
```

#### Typography Styles Creation
```
Create text elements with these specs:

Heading 1:
- Font: Inter/System UI
- Size: 72px (Desktop) / 36px (Mobile)
- Weight: Bold (700)
- Line height: 90%
- Color: Text/Primary
- Save as "Heading/H1"

Heading 2:
- Size: 48px (Desktop) / 30px (Mobile)
- Weight: SemiBold (600)  
- Line height: 95%
- Color: Text/Primary
- Save as "Heading/H2"

Body Large:
- Size: 20px (Desktop) / 18px (Mobile)
- Weight: Regular (400)
- Line height: 160%
- Color: Text/Body
- Save as "Body/Large"

Button Text:
- Size: 16px
- Weight: SemiBold (600)
- Line height: 130%
- Save as "Button/Text"

Repeat for all typography specifications...
```

#### Effect Styles Creation
```
Create rectangles and add effects:

Card Shadow:
- Drop Shadow: 0px 1px 3px rgba(0,0,0,0.1)
- Drop Shadow: 0px 1px 2px rgba(0,0,0,0.1)
- Save as "Shadow/Card"

Button Hover Shadow:
- Drop Shadow: 0px 4px 8px rgba(148,242,127,0.3)
- Save as "Shadow/Button Hover"

Backdrop Blur:
- Background Blur: 16px
- Save as "Blur/Header"
```

### Phase 3: Component Creation (45 minutes)

#### Primary Button Component
```
1. Create rectangle: 120x48px
2. Set border radius: 9999px (full rounded)
3. Set fill: Linear gradient from Primary/Green to Primary/Green Strong
4. Add text: "Button Text" style, color white
5. Add auto-layout: Horizontal, 14px padding, center alignment
6. Create component: Name "Button/Primary"

Variants:
- Create variant property "State": Default, Hover, Active, Disabled
- For Hover: Add Shadow/Button Hover, scale 102%
- For Active: Scale 98%
- For Disabled: Opacity 60%

Properties:
- Text property: "Label" (String)
- Icon property: "Show Icon" (Boolean)
```

#### Secondary Button Component  
```
1. Create rectangle: 120x48px
2. Set border radius: 9999px
3. Set fill: Background/White
4. Set border: 1px solid rgba(0,0,0,0.1)
5. Add text: "Button Text" style, color Text/Primary
6. Add auto-layout: Horizontal, 14px padding, center alignment
7. Create component: Name "Button/Secondary"

Variants:
- Same state variants as Primary
- Hover: Background rgba(0,0,0,0.05)
```

#### Business Card Component
```
1. Create frame: 350x480px
2. Set border radius: 12px  
3. Set fill: Background/White
4. Add effect: Shadow/Card
5. Add auto-layout: Vertical, 24px padding, 16px gap

Content Structure:
├── Image Frame (350x192px, radius 8px)
│   ├── Image fill (use business photo)
│   ├── Category Badge (top-left)
│   └── Sustainability Badge (top-right)
├── Content Frame (auto-layout vertical, 8px gap)
│   ├── Title (Heading/H3 style)
│   ├── Location Row (auto-layout horizontal)
│   │   ├── MapPin icon (14px)
│   │   └── Location text (Body/Small style)
│   ├── Description (Body/Small, 3 lines max)
│   ├── Rating Row (auto-layout horizontal)
│   │   ├── Star icon (14px, yellow fill)
│   │   ├── Rating number (Body/Small, bold)
│   │   └── Review count (Body/Small, muted)
│   ├── Badges Row (auto-layout horizontal, wrap)
│   └── Button Row (auto-layout horizontal, 8px gap)
│       ├── Primary Button ("Visit Business")
│       └── Icon Button (Heart, 48x48px)

Create component: "Card/Business"

Properties:
- Business Name (String)
- Category (String)  
- Location (String)
- Rating (String)
- Image (Boolean - show/hide)
- Sustainability Score (String)
```

#### Search Component
```
1. Create frame: 800x400px
2. Set border radius: 16px
3. Set fill: Background/White
4. Add effect: Shadow/Card
5. Add auto-layout: Vertical, 24px padding, 16px gap

Content Structure:
├── Search Input Row (auto-layout horizontal, 12px gap)
│   ├── Search icon (20px, muted color)
│   └── Input field (fill container, placeholder text)
├── Filters Row (auto-layout horizontal, 16px gap)
│   ├── Category Dropdown (flex 1)
│   ├── Location Dropdown (flex 1)  
│   └── Sustainability Slider (flex 1)
├── Map Container (800x300px, radius 12px, gray fill)
└── Search Button (Primary, center aligned)

Create component: "Search/Enhanced"

Properties:
- Search Term (String)
- Category (String)
- Location (String)
- Sustainability Value (String)
```

### Phase 4: Page Assembly (30 minutes)

#### Header Component
```
1. Create frame: 1440x80px
2. Set fill: rgba(255,255,255,0.6)
3. Add effect: Blur/Header
4. Add auto-layout: Horizontal, space between, 24px padding

Content:
├── Logo (Text: "Media UMKM", Heading/H3 style)
├── Navigation (auto-layout horizontal, 8px gap)
│   ├── Nav Link: "Discover"
│   ├── Nav Link: "Categories"  
│   ├── Nav Link: "How It Works"
│   └── Nav Link: "About"
└── Button Group (auto-layout horizontal, 12px gap)
    ├── Secondary Button: "Sign In"
    └── Primary Button: "Join Now"

Create component: "Header/Navigation"
```

#### Hero Section Assembly
```
1. Create frame: 1440x800px
2. Set fill: Gradient background (use hero gradient spec)
3. Add auto-layout: Vertical, center alignment, 48px gap

Content Structure:
├── Hero Content (max-width 800px, center aligned)
│   ├── Hero Title (Heading/H1)
│   ├── Hero Subtitle (Body/Large, center aligned)
│   ├── Search Component (enhanced)
│   └── Stats Row (auto-layout horizontal, 64px gap)
│       ├── Stat 1: "500+" + "Mapped Businesses"
│       ├── Stat 2: "50+" + "Cities Covered"
│       └── Stat 3: "10k+" + "Map Views"
```

#### Featured Section Assembly
```
1. Create section frame: 1440x800px
2. Add auto-layout: Vertical, center alignment, 48px gap

Content:
├── Section Header (center aligned)
│   ├── Title (Heading/H2)
│   └── Subtitle (Body/Large, max-width 600px)
├── Cards Grid (auto-layout horizontal, wrap, 32x24px gap)
│   ├── Business Card 1
│   ├── Business Card 2
│   ├── Business Card 3
│   ├── Business Card 4
│   ├── Business Card 5
│   └── Business Card 6
└── View More Button (Secondary)
```

### Phase 5: Responsive Variants (20 minutes)

#### Mobile Adaptations
```
For each component, create mobile variants:

Header Mobile:
- Change to hamburger menu
- Stack buttons vertically when menu open

Search Mobile:
- Stack filters vertically
- Reduce map height to 256px
- Full-width button

Cards Mobile:
- Single column layout
- Full-width cards
- Adjust padding/margins

Hero Mobile:
- Smaller typography
- Reduced spacing
- Adjusted proportions
```

### Phase 6: Interactive Prototyping (15 minutes)

#### Add Interactions
```
Desktop Flow:
1. Header navigation → Scroll to sections
2. Search button → Show filtered results state
3. Business cards → Overlay with details
4. CTA buttons → Next page or modal

Mobile Flow:
1. Hamburger menu → Overlay navigation
2. Search interactions → Mobile-optimized results
3. Touch-friendly interactions

Micro-interactions:
1. Button hover states
2. Card hover effects  
3. Loading states for search
4. Map marker interactions
```

### Phase 7: Documentation (10 minutes)

#### Create Design Specs
```
Add documentation frames:

1. Color Palette Overview
2. Typography Scale
3. Component Usage Guidelines
4. Spacing System
5. Responsive Breakpoints
6. Animation Specifications

Include:
- Usage examples
- Do's and Don'ts
- Code snippets for developers
- Asset export guidelines
```

## Final Checklist

✅ Design System: Colors, Typography, Effects
✅ Components: Buttons, Cards, Navigation, Search, Map
✅ Pages: Desktop and Mobile layouts complete
✅ Responsive: Mobile variants created
✅ Interactions: Prototype flows connected
✅ Documentation: Usage guidelines added

## Export Settings

```
For Developer Handoff:
- Components: SVG format
- Images: PNG 2x for retina
- Icons: SVG with proper naming
- Colors: CSS variables format
- Typography: CSS font specifications

For Asset Export:
- Icons: 24px SVG, black fills
- Images: Original size + 2x versions
- Backgrounds: High-res exports
```

## Pro Tips

1. **Use Auto-Layout extensively** - Makes responsive design easier
2. **Create master components first** - Ensures consistency
3. **Name layers clearly** - Helps with developer handoff
4. **Use component properties** - Reduces duplicate components
5. **Test responsive behavior** - Check all breakpoints
6. **Document everything** - Include usage guidelines

This guide provides a complete walkthrough to recreate the Media UMKM WebGIS platform in Figma with pixel-perfect accuracy and full interactive prototyping capabilities.