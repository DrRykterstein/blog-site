import React, { useContext } from "react";
import Link from "next/link";
import { Card, CardMedia } from "@material-ui/core";
import { Post } from "../data";
import { ScreenSizeContext } from "../contexts/screenSizeContext";
import Text from "../controls/Text";
import featuredStyles from "../styles/FeaturedBlogItem.module.scss";

interface Props {
  featuredPost: Post;
}

const FeaturedBlogItem: React.FC<Props> = ({ featuredPost }) => {
  const { card, imageContainer, image, overlay } = featuredStyles;
  const screenSize = useContext(ScreenSizeContext);
  const { screenWidth } = screenSize;

  return (
    <Card className={card}>
      <div className={imageContainer}>
        <CardMedia className={image} image={featuredPost.image}></CardMedia>
        <Link href={`post/${featuredPost.id}`}>
          <div className={overlay}>
            <Text variant={screenWidth < 769 ? "h4" : "h3"}>{featuredPost.title}</Text>
            <Text variant={screenWidth < 769 ? "body1" : "h6"}>{featuredPost.excerpt}</Text>
            <Text variant={screenWidth < 769 ? "caption" : "body1"}>Continue Reading...</Text>
          </div>
        </Link>
      </div>
    </Card>
  );
}

export default FeaturedBlogItem;