import type {
  BlogPostDetail,
  PaginatedBlogPostSummary,
  Tag,
} from "@/app/types/blog";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.trim() ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api"
    : "https://api.ricqcodes.dev/api");

export async function fetchPosts(): Promise<PaginatedBlogPostSummary> {
  const res = await fetch(`${API_BASE}/posts`, {
    next: { revalidate: 360 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch all articles");
  }

  return res.json();
}

export async function fetchTags(): Promise<Tag[]> {
  const res = await fetch(`${API_BASE}/tags`, {
    next: { revalidate: 360 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch all tags");
  }

  return res.json();
}

export async function fetchPostsByTag(tag: string, signal?: AbortSignal) {
  const res = await fetch(
    `${API_BASE}/posts/byTag/${encodeURIComponent(tag)}`,
    { signal }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tagged articles");
  }

  return res.json();
}

export async function fetchPostBySlug(
  slug: string,
  incrementViews = true
): Promise<BlogPostDetail> {
  const res = await fetch(
    `${API_BASE}/posts/${slug}?incrementViews=${incrementViews ? "true" : "false"}`,
    { next: { revalidate: 0 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  return res.json();
}
