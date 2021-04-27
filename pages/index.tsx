import React from "react";
import { db } from "../utils/queryDatabase";
import { Post } from "../models/Post";
import { Grid } from "@material-ui/core";
import { ScreenSizeProvider } from "../contexts/screenSizeContext";
import Components from "../components/Components";
import homeStyles from "../styles/Home.module.scss";

interface IndexProps {
	posts: Array<Post>;
}

export default function Home({ posts }: IndexProps) {
	const { BlogItem, FeaturedBlogItem } = Components;
	const splicedPosts = [...posts].splice(1); // Remove first post

	return (
		<div className={homeStyles.container}>
			<ScreenSizeProvider>
				<FeaturedBlogItem featuredPost={posts[0]} />
				<Grid container spacing={3}>
					{splicedPosts.map((post, idx) => (
						<Grid key={idx} item md={6} lg={4}>
							<BlogItem post={post} />
						</Grid>
					))}
				</Grid>
			</ScreenSizeProvider>
		</div>
	);
}

// Fetch all posts
export const getStaticProps = async () => {
	const posts = await db.getAll();

	return {
		props: {
			posts,
		},
	};
};
