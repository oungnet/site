# Styling Guide for TechGreen Platforms

## Tailwind CSS Configuration

### Color Palette

**Primary Colors:**
- Green (Action): `#00D084` → Use `bg-green-500`, `text-green-500`
- Blue (Secondary): `#0066CC` → Use `bg-blue-600`, `text-blue-600`
- Yellow (Warning): `#FFD700` → Use `bg-yellow-400`, `text-yellow-400`

**Neutral Colors:**
- Dark Navy (Background): `#1a2332` → Use `bg-slate-900`, `text-slate-900`
- Light Gray (Cards): `#f5f5f5` → Use `bg-gray-50`
- Text Gray: `#666666` → Use `text-gray-600`

**Status Colors:**
- Success: `#22c55e` (green-500)
- Error: `#ef4444` (red-500)
- Warning: `#f59e0b` (amber-500)
- Info: `#3b82f6` (blue-500)

### Typography Scale

**Headings:**
- H1: `text-5xl md:text-6xl font-bold` (Hero titles)
- H2: `text-3xl md:text-4xl font-bold` (Section titles)
- H3: `text-2xl font-bold` (Subsection titles)
- H4: `text-xl font-bold` (Card titles)
- H5: `text-lg font-bold` (Small titles)

**Body Text:**
- Large: `text-lg` (Emphasis)
- Normal: `text-base` (Default)
- Small: `text-sm` (Secondary info)
- Tiny: `text-xs` (Captions)

**Font Weights:**
- Bold: `font-bold` (Headings, emphasis)
- Semibold: `font-semibold` (Subheadings)
- Medium: `font-medium` (Labels)
- Normal: `font-normal` (Body text)

### Spacing System

**Padding/Margin:**
- Tight: `p-2`, `m-2` (8px)
- Small: `p-4`, `m-4` (16px)
- Medium: `p-6`, `m-6` (24px)
- Large: `p-8`, `m-8` (32px)
- XLarge: `p-12`, `m-12` (48px)
- XXLarge: `p-16`, `m-16` (64px)

**Gap (Flexbox/Grid):**
- `gap-2` (8px)
- `gap-4` (16px)
- `gap-6` (24px)
- `gap-8` (32px)

### Responsive Breakpoints

```
Mobile First (default): < 640px
sm: 640px (small screens)
md: 768px (tablets)
lg: 1024px (desktops)
xl: 1280px (large desktops)
2xl: 1536px (extra large)
```

**Common Patterns:**
```tsx
// Single column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Hidden on mobile, visible on desktop
<div className="hidden lg:block">

// Full width on mobile, container on desktop
<div className="w-full lg:max-w-6xl mx-auto">

// Stack on mobile, side-by-side on desktop
<div className="flex flex-col md:flex-row gap-6">
```

## Component Styling Patterns

### Card Component

```tsx
// Basic card
<Card className="p-6 hover:shadow-lg transition">
  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
  <p className="text-gray-600">{description}</p>
</Card>

// Card with left border accent
<Card className="p-8 border-l-4 border-l-green-500">
  <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
  <p className="text-gray-600">{content}</p>
</Card>

// Card with background color
<Card className="p-8 bg-blue-50 border-blue-200">
  <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
  <p className="text-gray-700">{content}</p>
</Card>
```

### Button Styles

```tsx
// Primary button (green)
<Button className="bg-green-500 text-white hover:bg-green-600">
  Action Button
</Button>

// Secondary button (outline)
<Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-50">
  Secondary Button
</Button>

// Large button (full width)
<Button size="lg" className="w-full">
  Full Width Button
</Button>

// Button with icon
<Button className="flex items-center gap-2">
  <Phone size={20} />
  Call Now
</Button>
```

### Section Styling

```tsx
// Light background section
<section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>

// Gradient background section
<section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>

// Gray background section
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

### Text Styling

```tsx
// Gradient text
<h1 className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
  Gradient Text
</h1>

// Highlighted text
<p className="text-gray-600">
  This is <span className="text-green-600 font-bold">important</span> information
</p>

// Truncated text
<p className="truncate">Long text that will be cut off...</p>

// Line clamp (limit to 2 lines)
<p className="line-clamp-2">Multi-line text that will be limited to 2 lines...</p>
```

### Hover & Transition Effects

```tsx
// Hover shadow
<Card className="hover:shadow-lg transition">

// Hover color change
<button className="text-gray-600 hover:text-green-500 transition">

// Hover scale
<div className="hover:scale-105 transition transform">

// Hover background
<div className="hover:bg-gray-100 transition">

// Combined effects
<Card className="hover:shadow-xl hover:scale-105 transition transform cursor-pointer">
```

### Grid Layouts

```tsx
// 4-column grid (responsive)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

// 3-column grid
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

// 2-column grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Auto-fit grid (flexible columns)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
```

### Flexbox Layouts

```tsx
// Center content
<div className="flex items-center justify-center">

// Space between items
<div className="flex items-center justify-between">

// Column layout (stack vertically)
<div className="flex flex-col gap-4">

// Row layout (side by side)
<div className="flex flex-row gap-4">

// Responsive: column on mobile, row on desktop
<div className="flex flex-col md:flex-row gap-4">
```

## Dark Mode Considerations

For dark theme support, use semantic color classes:

```tsx
// Instead of hard-coded colors
<div className="bg-white text-black">

// Use semantic classes
<div className="bg-background text-foreground">

// For dark-specific styling
<div className="dark:bg-slate-900 dark:text-white">
```

## Accessibility Guidelines

### Color Contrast
- Ensure text has sufficient contrast (WCAG AA minimum 4.5:1 for normal text)
- Don't rely on color alone to convey information

### Focus States
```tsx
// Visible focus ring
<button className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
  Button
</button>
```

### Semantic HTML
```tsx
// Use semantic elements
<button> instead of <div onClick>
<a> or <Link> for navigation
<label> for form inputs
<h1>, <h2>, etc. for headings
```

## Performance Tips

1. **Use Tailwind utilities instead of custom CSS** - Smaller bundle size
2. **Limit custom colors** - Stick to the defined palette
3. **Use `transition` class** - Consistent animation timing
4. **Lazy load images** - Use `loading="lazy"` attribute
5. **Minimize custom CSS** - Prefer Tailwind classes

## Common Tailwind Mistakes to Avoid

```tsx
// ❌ DON'T: Hardcoded colors
<div className="bg-#00D084">

// ✅ DO: Use Tailwind classes
<div className="bg-green-500">

// ❌ DON'T: Arbitrary values without good reason
<div className="w-[347px]">

// ✅ DO: Use standard spacing
<div className="w-full md:max-w-2xl">

// ❌ DON'T: Nested media queries
<div className="md:lg:text-lg">

// ✅ DO: Single breakpoint prefix
<div className="md:text-lg lg:text-xl">
```
