import { posts } from "../../data";

// Serve posts from API at '/api/posts' route
export default function handler(req: any, res: any) {
  res.status(200).json(posts);
}
