import { CategoriesDto } from "@/shared/constants";

export interface Project {
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  category: CategoriesDto;
  isFeatured: boolean;
  sections: ProjectSection[];
  conclusion: ProjectSection;
  rating: number;
}

export interface ProjectSection {
  title: string;
  description: object;
  rating: number;
}
