export interface INews {
  author: string;
  category: CategoryType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface IBanner {
  description: string;
  id: string;
  image: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: CategoryType[];
  description: string;
  status: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryType | null;
  keywords: string;
}

export interface IPaginationProps {
  totalPages: number;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";

export type ParamsType = Partial<IFilters>;

export type ItemType = INews & IBanner;

export type CategoryType =
  | "regional"
  | "technology"
  | "lifestyle"
  | "business"
  | "general"
  | "programming"
  | "science"
  | "entertainment"
  | "world"
  | "sports"
  | "finance"
  | "academia"
  | "politics"
  | "health"
  | "opinion"
  | "food"
  | "game"
  | "fashion"
  | "academic"
  | "crap"
  | "travel"
  | "culture"
  | "economy"
  | "environment"
  | "art"
  | "music"
  | "notsure"
  | "CS"
  | "education"
  | "redundant"
  | "television"
  | "commodity"
  | "movie"
  | "entrepreneur"
  | "review"
  | "auto"
  | "energy"
  | "celebrity"
  | "medical"
  | "gadgets"
  | "design"
  | "EE"
  | "security"
  | "mobile"
  | "estate"
  | "funny";
