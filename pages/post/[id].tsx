import React from "react";
import { db } from "../../utils/queryDatabase";
import { Post } from "../../models/Post";
import { Grid } from "@material-ui/core";
import Components from "../../components/Components";
import Text from "../../controls/Text";
import postStyles from "../../styles/post.module.scss";

const post = ({ post, otherPosts }) => {
	const { container } = postStyles;
	const { Meta, Banner, PostContent } = Components;
	const { title, excerpt, date }: Post = post;

	return (
		<>
			<Meta title={title} description={excerpt} />
			<div className={container}>
				<Banner post={post} />
				<Text color="textSecondary" variant="subtitle2">
					{date}
				</Text>
				<Grid container spacing={3}>
					<PostContent
						post={post}
						otherPosts={otherPosts}
						postStyles={postStyles}
					/>
				</Grid>
			</div>
		</>
	);
};

export const getStaticProps = async ({ params: { id } }) => {
	// Extract the post with a matching id as well as the other posts
	const post = await db.getOne(id);
	const otherPosts = await db.getAllExcluding(id);
	console.log(post[0]);

	return {
		props: {
			post: post[0],
			otherPosts,
		},
	};
};

export const getStaticPaths = async () => {
	// Get all posts from database
	const posts = await db.getAll();

	// Get post id's and store each id within our paths
	const idList = posts.map((post: Post) => post.id);
	const paths = idList.map((id: string) => ({
		params: {
			id: id.toString(),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export default post;
