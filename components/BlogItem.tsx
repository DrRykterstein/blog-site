import React from "react";
import { Post } from "../models/Post";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@material-ui/core";
import Controls from "../controls/Controls";
import blogItemStyles from "../styles/BlogItem.module.scss";

interface Props {
	post: Post;
}

const BlogItem: React.FC<Props> = ({ post }) => {
	const { card, image, textContainer } = blogItemStyles;
	const { Text } = Controls;

	return (
		<Link href={`post/${post.id}`}>
			<Card className={card} variant="elevation">
				<Image
					className={image}
					src={post.image}
					height={200}
					width={488}
				/>
				<div className={textContainer}>
					<Text>{post.title} &#10140;</Text>
					<Text variant="body1">{post.excerpt}</Text>
				</div>
			</Card>
		</Link>
	);
};

export default BlogItem;
