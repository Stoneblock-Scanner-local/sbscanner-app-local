import CategoryDefiImg from "../assets/images/category-defi.png";
import CategoryDeveloperToolingImg from "../assets/images/category-developer-tooling.png";
import CategoryGamingImg from "../assets/images/category-gaming.png";
import CategoryInfrastructureImg from "../assets/images/category-infrastructure.png";
import CategoryNftImg from "../assets/images/category-nft.png";
import CategoryOtherImg from "../assets/images/category-other.png";
import CategorySocialImg from "../assets/images/category-social.png";

export enum Themes {
  LIGHT = "light",
  DARK = "dark",
}

export enum Categories {
  Defi = "DEFI",
  DeveloperTooling = "DEVELOPER_TOOLING",
  Gaming = "GAMING",
  Infrastructure = "INFRASTRUCTURE",
  Nft = "NFT",
  Social = "SOCIAL",
  Other = "OTHER",
}

export enum CategoriesDto {
  Defi = "DeFi",
  DeveloperTooling = "Developer Tooling",
  Gaming = "Gaming",
  Infrastructure = "Infrastructure",
  Nft = "NFT",
  Social = "Social",
  Other = "Other",
}

export const PROJECT_IMAGES = {
  [CategoriesDto.Defi]: CategoryDefiImg.src,
  [CategoriesDto.DeveloperTooling]: CategoryDeveloperToolingImg.src,
  [CategoriesDto.Gaming]: CategoryGamingImg.src,
  [CategoriesDto.Infrastructure]: CategoryInfrastructureImg.src,
  [CategoriesDto.Nft]: CategoryNftImg.src,
  [CategoriesDto.Other]: CategoryOtherImg.src,
  [CategoriesDto.Social]: CategorySocialImg.src,
};

export const DEFAULT_PAGE_SIZE = 4;

export const SEARCH_COMPATIBLE_PAGES = [
  "/projects/rankings",
  "/projects/community",
  "/projects/nominations",
  "/saved/nominations",
];
