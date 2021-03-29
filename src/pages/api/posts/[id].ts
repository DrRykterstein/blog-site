import { posts } from "../../../data";

function handler({ query: { id } }, res: any) {
  // Determine the post with matching id and store the rest as other posts
  let otherPosts = [], post = [];

  posts.forEach(p => p.id === id ? post.push(p) : otherPosts.push(p));
 
  // Send response based on whether post with requested id was found
  if (post.length > 0) {
    res.status(200).json({ post: post[0], otherPosts });
  } else {
    res.status(404).json({ 
      message: `Article with id ${id} was not found.`
    });
  }
}

export default handler;