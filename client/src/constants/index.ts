export const APP_NAME = "Ban Non-Yai Smarter! Platform";
export const APP_VERSION = "1.0.0";
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";

export const ROUTES = {
  HOME: "/",
  DISABILITY_BENEFITS: "/disability-benefits",
  TAX_BENEFITS: "/tax-benefits",
  RESOURCES: "/resources",
  INNOVATION: "/innovation",
  PARTNERSHIP: "/partnership",
  DASHBOARD: "/dashboard",
  LEARNING: "/learning",
  REGISTER: "/register",
  LOGIN: "/login",
  APPLY_BENEFITS: "/apply-benefits",
  CONTACT: "/contact",
  USER_DASHBOARD: "/dashboard-user",
  NOT_FOUND: "/404",
} as const;

export const MENU_ITEMS = [
  { label: "หน้าแรก", href: ROUTES.HOME },
  { label: "สิทธิผู้พิการ", href: ROUTES.DISABILITY_BENEFITS },
  { label: "สิทธิลดหย่อนภาษี", href: ROUTES.TAX_BENEFITS },
  { label: "ทรัพยากร", href: ROUTES.RESOURCES },
  { label: "นวัตกรรม", href: ROUTES.INNOVATION },
  { label: "ความร่วมมือ", href: ROUTES.PARTNERSHIP },
  { label: "บทเรียน", href: ROUTES.LEARNING },
  { label: "ติดต่อ", href: ROUTES.CONTACT },
] as const;