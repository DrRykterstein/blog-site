import { server } from "../config/config";

// Fetch all posts
export const fetchPosts = async () => {
  const res = await fetch(`${server}/api/posts`);
  const data = await res.json();
  return data;
}

// Fetch post with corresponding id
export const fetchPost = async (id: number) => {
  const res = await fetch(`${server}/api/posts/${id}`);
  const data = await res.json();
  return data;
}