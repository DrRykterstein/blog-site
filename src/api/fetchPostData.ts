import { server } from "../config/config";

// Fetch all posts
export const fetchPosts = async () => {
  const res = await fetch(
    `${server}/api/posts`,
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
        Accept: "application/json; charset=UTF-8",
      },
    }
  );
  const data = await res.json();
  return data;
}

// Fetch post with corresponding id
export const fetchPost = async (id: number) => {
  const res = await fetch(
    `${server}/api/posts/${id}`,
    {
      method: "GET",
      headers: {
        // update with your user-agent
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
        Accept: "application/json; charset=UTF-8",
      },
    }
  );
  const data = await res.json();
  return data;
}