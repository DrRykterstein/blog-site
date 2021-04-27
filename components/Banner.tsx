import React, { useEffect, useState } from "react";
import { Post } from "../models/Post";
import { Card, CardMedia } from "@material-ui/core";
import Text from "../controls/Text";
import bannerStyles from "../styles/Banner.module.scss";

interface Props {
	post: Post;
}

const Banner: React.FC<Props> = ({ post }) => {
	const { card, imageContainer, image, overlay } = bannerStyles;
	const [screenWidth, setScreenWidth] = useState<number>(null);

	useEffect(() => {
		setScreenWidth(window.innerWidth);
		window.addEventListener("resize", () => {
			setScreenWidth(window.innerWidth);
		});
	}, []);

	return (
		<Card className={card}>
			<div className={imageContainer}>
				<CardMedia className={image} image={post.image}></CardMedia>
				<div className={overlay}>
					<Text
						variant={screenWidth < 768 ? "h4" : "h3"}
						gutterBottom={false}
					>
						{post.title}
					</Text>
				</div>
			</div>
		</Card>
	);
};

export default Banner;
