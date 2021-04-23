import { db } from "../../utils/queryDatabase";

// Serve posts from API at '/api/posts' route
export default async function handler(req: any, res: any) {
  const posts = await db.getAll();
  res.status(200).json(posts);
}
