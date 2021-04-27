import { db } from "../../../utils/queryDatabase";
import { Post } from "../../../models/Post";

async function handler({ query: { id } }, res: any) {
	// Determine the post with matching id and store the rest as other posts
	const posts = await db.getAll();
	let otherPosts = [],
		post: Post;

	posts.forEach((p: Post) =>
		p.id === id ? (post = p) : otherPosts.push(p)
	);

	// Send response based on whether post with requested id was found
	if (post) {
		res.status(200).json({ post, otherPosts });
	} else {
		res.status(404).json({
			message: `Article with id ${id} was not found.`,
		});
	}
}

export default handler;
