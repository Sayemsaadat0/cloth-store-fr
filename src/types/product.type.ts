import type { TCategory } from "./category.type";

export interface TProduct {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  category_id: number;
  created_at: string;
  updated_at: string;
  category: TCategory;
}
