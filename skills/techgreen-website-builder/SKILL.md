---
name: techgreen-website-builder
description: Build comprehensive government support platforms with React + Tailwind CSS. Use for creating multi-page websites with forms, dashboards, and educational content for disability benefits, tax incentives, and community support programs. Includes workflows for page creation, form implementation, font customization, and error handling.
---

# TechGreen Website Builder

## Overview

This skill enables rapid development of comprehensive government support and community platforms using React 19, Tailwind CSS 4, and shadcn/ui components. It provides proven workflows for creating multi-page websites with complex forms, interactive dashboards, and educational content—specifically designed for platforms serving people with disabilities, entrepreneurs, and government agencies.

The skill captures the complete workflow used to build the Ban Non-Yai Smarter! platform, which includes 13+ pages, registration systems, benefit application forms, and resource management interfaces.

## Core Workflow

### 1. Project Initialization & Design Planning

**Step 1.1: Initialize Project**
```bash
webdev_init_project project_name="your-platform-name"
```

**Step 1.2: Create Design Philosophy Document**
Create `ideas.md` with three distinct design approaches, each including:
- Design Movement (reference aesthetic)
- Core Principles (3-4 defining characteristics)
- Color Philosophy (reasoning and emotional intent)
- Layout Paradigm (unique structural approach)
- Signature Elements (2-3 distinctive visual motifs)
- Interaction Philosophy (how interactions reflect design ethos)
- Animation Guidelines (detailed animation specifications)
- Typography System (font pairings and hierarchy rules)

**Step 1.3: Select Design & Document**
Choose ONE approach and document relevant style information at the top of every CSS/component file as a reminder.

### 2. Font Customization

**For Thai-language platforms using Sarabun (official Thai font):**

**Step 2.1: Update `client/index.html`**
Add Google Fonts import in the `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**Step 2.2: Update `client/src/index.css`**
In the `@layer base` section, add:
```css
body {
  font-family: 'Sarabun', sans-serif;
}
```

### 3. Page Architecture & Navigation

**Step 3.1: Define Navigation Structure**
Create `Navigation.tsx` component with:
- Logo/brand section
- Desktop navigation menu (hidden on mobile)
- Mobile hamburger menu with collapsible items
- Use Wouter's `<Link>` component (NOT nested `<Link><a>`)

**Critical: Avoid nested anchor tags**
```tsx
// ❌ WRONG: Creates nested <a> tags
<Link href="/path">
  <a className="...">Text</a>
</Link>

// ✅ CORRECT: Pass className directly to Link
<Link href="/path" className="...">
  Text
</Link>
```

**Step 3.2: Create Page Structure**
For each page, follow this pattern:
```tsx
export default function PageName() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Page Title</h1>
          <p className="text-xl text-blue-100">Subtitle</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Content here */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        {/* Call-to-action */}
      </section>
    </div>
  );
}
```

### 4. Form Implementation Patterns

**For benefit application forms with multiple benefit types:**

**Step 4.1: Create Form Structure**
```tsx
const [selectedBenefit, setSelectedBenefit] = useState("disability");

const benefitTypes = [
  { id: "disability", label: "สิทธิประโยชน์ผู้พิการ", icon: "👁️" },
  { id: "tax", label: "สิทธิลดหย่อนภาษี", icon: "💰" },
  // ... more types
];
```

**Step 4.2: Use Tabs for Organization**
```tsx
<Tabs defaultValue="categories" className="w-full">
  <TabsList className="grid w-full grid-cols-3 mb-8">
    <TabsTrigger value="categories">Category 1</TabsTrigger>
    <TabsTrigger value="benefits">Category 2</TabsTrigger>
    <TabsTrigger value="process">Category 3</TabsTrigger>
  </TabsList>

  <TabsContent value="categories">
    {/* Content */}
  </TabsContent>
</Tabs>
```

**Step 4.3: Form Fields with Validation**
Use shadcn/ui Form component:
```tsx
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";

const form = useForm({
  defaultValues: { email: "", name: "" }
});

<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <input {...field} type="email" />
        </FormControl>
      </FormItem>
    )}
  />
</Form>
```

### 5. Dashboard & Data Visualization

**For displaying statistics and performance metrics:**

**Step 5.1: Use Recharts for Charts**
```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#00D084" />
  </LineChart>
</ResponsiveContainer>
```

**Step 5.2: Card-based Layout for Metrics**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {metrics.map((metric) => (
    <Card key={metric.id} className="p-6">
      <div className="text-4xl font-bold text-green-500">{metric.value}</div>
      <p className="text-gray-600 mt-2">{metric.label}</p>
    </Card>
  ))}
</div>
```

### 6. Common Component Patterns

**Step 6.1: Card-based Content**
```tsx
<Card className="p-8 hover:shadow-lg transition">
  <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
  <p className="text-gray-600">{description}</p>
</Card>
```

**Step 6.2: Process Timeline**
```tsx
{steps.map((item, index) => (
  <div key={index} className="flex gap-6">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
        {item.step}
      </div>
      {index < steps.length - 1 && (
        <div className="w-1 h-16 bg-green-300"></div>
      )}
    </div>
    <div className="pb-6">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.description}</p>
    </div>
  </div>
))}
```

**Step 6.3: Information Cards with Icons**
```tsx
<Card className="p-8 border-l-4 border-l-green-500">
  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
    <FileText size={24} className="text-green-500" />
    Section Title
  </h3>
  <ul className="space-y-2 text-gray-700">
    {items.map((item, i) => (
      <li key={i}>✓ {item}</li>
    ))}
  </ul>
</Card>
```

### 7. Routing & App Structure

**Step 7.1: Update `App.tsx`**
```tsx
import { Route, Switch } from "wouter";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/disability-benefits"} component={DisabilityBenefits} />
      <Route path={"/register"} component={Register} />
      <Route path={"/login"} component={Login} />
      <Route path={"/apply-benefits"} component={ApplyBenefits} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/dashboard-user"} component={UserDashboard} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

### 8. Error Handling & Debugging

**Common Issues & Solutions:**

| Issue | Cause | Solution |
|-------|-------|----------|
| Nested anchor tags error | `<Link><a>` structure | Use `<Link className>` directly |
| Missing page imports | Forgot to import new page | Add import statement in App.tsx |
| Font not applying | Font not linked in HTML | Add Google Fonts link in `client/index.html` |
| Responsive layout broken | Missing breakpoints | Use `md:`, `lg:` Tailwind prefixes |
| Form validation not working | Missing Form wrapper | Wrap with `<Form {...form}>` from shadcn/ui |

**Step 8.1: Check Dev Server Status**
```bash
webdev_check_status
```

**Step 8.2: Restart Server if Needed**
```bash
webdev_restart_server
```

### 9. Deployment & Checkpoints

**Step 9.1: Create Checkpoint**
```bash
webdev_save_checkpoint
```

**Step 9.2: Publish Website**
Click the Publish button in the Management UI (requires checkpoint first).

## Page Templates

### Home Page Template
- Hero section with gradient background
- Feature cards (4 columns on desktop, 1 on mobile)
- Statistics section
- Call-to-action buttons
- Footer

### Benefit Information Page Template
- Header with gradient
- Tabs for different categories
- Card-based content layout
- Process timeline
- Contact information card
- CTA section

### Form Page Template
- Form header with instructions
- Multi-step form or tabs
- Input fields with validation
- Submit button
- Success/error messages

### Dashboard Page Template
- Statistics cards (4 columns)
- Charts and graphs
- Data tables
- Filters and sorting options
- Export functionality

## Color Scheme Reference

**Primary Colors:**
- Green: `#00D084` (primary action)
- Blue: `#0066CC` (secondary)
- Yellow: `#FFD700` (warnings/highlights)

**Neutral Colors:**
- Dark Navy: `#1a2332` (backgrounds)
- Light Gray: `#f5f5f5` (card backgrounds)
- Text Gray: `#666666` (body text)

**Status Colors:**
- Success: `#22c55e` (green)
- Error: `#ef4444` (red)
- Warning: `#f59e0b` (amber)
- Info: `#3b82f6` (blue)

## Resources

See `/home/ubuntu/skills/techgreen-website-builder/references/` for:
- **component-patterns.md** - Reusable component code snippets
- **form-examples.md** - Complete form implementation examples
- **styling-guide.md** - Tailwind CSS customization patterns

See `/home/ubuntu/skills/techgreen-website-builder/scripts/` for:
- **setup-fonts.py** - Automated font installation script
- **validate-pages.py** - Check page structure and links

See `/home/ubuntu/skills/techgreen-website-builder/templates/` for:
- **page-template.tsx** - Base page structure template
- **form-template.tsx** - Form component template
