import React from "react";
import Link from "next/link";
import { Post } from "../models/Post";
import { Card } from "@material-ui/core";
import Text from "../controls/Text";
import postStyles from "../styles/OtherPosts.module.scss";

interface Props {
	otherPost: Post;
}

const OtherPosts: React.FC<Props> = ({ otherPost }) => {
	const { id, title, date, excerpt } = otherPost;
	const { card } = postStyles;

	return (
		<Link href={`/post/${id}`}>
			<Card className={card} variant="elevation">
				<Text>{title}</Text>
				<Text variant="subtitle1" color="textSecondary">
					{date}
				</Text>
				<Text variant="body2">{excerpt}</Text>
				<Text variant="caption" color="primary">
					Continue reading...
				</Text>
			</Card>
		</Link>
	);
};

export default OtherPosts;
