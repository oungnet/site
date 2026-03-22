export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface DisabilityBenefit {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  documents: string[];
  contact: string;
}

export interface TaxBenefit {
  id: string;
  name: string;
  description: string;
  taxReduction: number;
  section: string;
  conditions: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  location: string;
  contact: string;
  area: number;
  type: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sort?: string;
  order?: "asc" | "desc";
}

export type ThemeType = "light" | "dark" | "system";