# Component Patterns Reference

## Navigation Component

```tsx
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "หน้าแรก", href: "/" },
    { label: "สิทธิประโยชน์", href: "/benefits" },
    { label: "ทรัพยากร", href: "/resources" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-green-400 transition">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">NY</span>
            </div>
            <span>Ban Non-Yai Smarter!</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-green-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-slate-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-green-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
```

## Feature Cards Grid

```tsx
import { Card } from "@/components/ui/card";

export default function FeatureCards() {
  const features = [
    {
      icon: "👥",
      title: "ผู้พิการ",
      description: "ข้อมูลสิทธิประโยชน์และการสนับสนุน",
    },
    {
      icon: "💼",
      title: "ผู้ประกอบการ",
      description: "สิทธิลดหย่อนภาษีและทรัพยากร",
    },
    {
      icon: "📊",
      title: "สถิติและข้อมูล",
      description: "แดชบอร์ดและการวิเคราะห์ประสิทธิภาพ",
    },
    {
      icon: "🌱",
      title: "นวัตกรรม",
      description: "เทคโนโลยีเกษตรสีเขียว",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition">
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </Card>
      ))}
    </div>
  );
}
```

## Tabs with Content

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function BenefitTabs() {
  const categories = [
    {
      id: "disability",
      name: "ผู้พิการ",
      icon: "👁️",
      benefits: ["เงินเบี้ยรายเดือน", "การรักษาพยาบาล", "อุปกรณ์ช่วย"],
    },
    {
      id: "tax",
      name: "สิทธิภาษี",
      icon: "💰",
      benefits: ["มาตรา 33", "มาตรา 35", "ESG Tax Credit"],
    },
  ];

  return (
    <Tabs defaultValue="disability" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        {categories.map((cat) => (
          <TabsTrigger key={cat.id} value={cat.id}>
            {cat.icon} {cat.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((cat) => (
        <TabsContent key={cat.id} value={cat.id} className="space-y-4">
          {cat.benefits.map((benefit, i) => (
            <Card key={i} className="p-4">
              <p className="text-gray-700">✓ {benefit}</p>
            </Card>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  );
}
```

## Process Timeline

```tsx
export default function ProcessTimeline() {
  const steps = [
    {
      step: 1,
      title: "เตรียมเอกสาร",
      description: "เตรียมเอกสารที่จำเป็น เช่น บัตรประชาชน ใบรับรองแพทย์",
    },
    {
      step: 2,
      title: "ยื่นคำขอ",
      description: "ยื่นคำขอต่อสำนักงานในจังหวัดของคุณ",
    },
    {
      step: 3,
      title: "ตรวจสอบ",
      description: "เจ้าหน้าที่จะตรวจสอบเอกสารและสัมภาษณ์",
    },
    {
      step: 4,
      title: "อนุมัติ",
      description: "หากผ่านการตรวจสอบ คุณจะได้รับการอนุมัติ",
    },
  ];

  return (
    <div className="space-y-6">
      {steps.map((item, index) => (
        <div key={index} className="flex gap-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg mb-4">
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
    </div>
  );
}
```

## Information Card with Icon

```tsx
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function InfoCard() {
  const items = [
    "บัตรประชาชน",
    "ใบรับรองแพทย์",
    "ใบสำคัญการศึกษา",
    "เอกสารอื่นๆ ตามความจำเป็น",
  ];

  return (
    <Card className="p-8 border-l-4 border-l-green-500">
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        <FileText size={24} className="text-green-500" />
        เอกสารที่ต้องเตรียม
      </h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i}>✓ {item}</li>
        ))}
      </ul>
    </Card>
  );
}
```

## Statistics Dashboard

```tsx
import { Card } from "@/components/ui/card";

export default function StatsDashboard() {
  const stats = [
    { label: "ผู้พิการที่ได้รับสิทธิ", value: "2,548", color: "text-blue-600" },
    { label: "ผู้ประกอบการ", value: "1,234", color: "text-green-600" },
    { label: "โครงการสนับสนุน", value: "156", color: "text-purple-600" },
    { label: "อุปกรณ์ช่วยที่จัดสรร", value: "8,932", color: "text-orange-600" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
          <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}
```

## Hero Section

```tsx
export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Ban Non-Yai Smarter!
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            บูรณาการนวัตกรรมเพื่อความเท่าเทียม สนับสนุนผู้พิการ ผู้ประกอบการ และชุมชน
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              เรียนรู้เพิ่มเติม
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition">
              เข้าสู่ระบบ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
```
