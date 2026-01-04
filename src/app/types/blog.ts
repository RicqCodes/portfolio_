export type Tag = {
  name: string;
};

export type ContentBlockTitle = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  text: string;
};

export type ContentBlockList = {
  type: "ordered" | "unordered";
  content: string[];
};

export type ContentBlockLink = {
  text: string;
  url: string;
};

export type ContentBlock = {
  type: "text" | "heading" | "divider" | "image" | "video" | "code" | "list";
  order?: number;
  title?: ContentBlockTitle | string;
  content?: string;
  list?: ContentBlockList;
  links?: ContentBlockLink[];
  imageUrl?: string;
  codeType?: string;
};

export type BlogPostSummary = {
  id: number;
  title: string;
  slug: string;
  coverImage: string;
  readTime: number;
  views: number;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
};

export type BlogPostDetail = BlogPostSummary & {
  contentBlocks: ContentBlock[];
};

export type PaginatedBlogPostSummary = {
  items: BlogPostSummary[];
  total: number;
  page: number;
  limit: number;
};
