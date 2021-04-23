import React, { useContext } from "react";
import Link from "next/link";
import { Card, CardMedia } from "@material-ui/core";
import { Post } from "../Post/Post";
import { ScreenSizeContext } from "../contexts/screenSizeContext";
import Text from "../controls/Text";
import featuredStyles from "../styles/FeaturedBlogItem.module.scss";

interface Props {
  featuredPost: Post;
}

const FeaturedBlogItem: React.FC<Props> = ({ featuredPost }) => {
  const { card, imageContainer, featuredImage, overlay } = featuredStyles;
  const { id, title, excerpt, _image } = featuredPost;
  const screenSize = useContext(ScreenSizeContext);
  const { screenWidth } = screenSize;

  return (
    <Card className={card}>
      <div className={imageContainer}>
        <CardMedia className={featuredImage} image={_image}></CardMedia>
        <Link href={`post/${id}`}>
          <div className={overlay}>
            <Text variant={screenWidth < 769 ? "h4" : "h3"}>{title}</Text>
            <Text variant={screenWidth < 769 ? "body1" : "h6"}>{excerpt}</Text>
            <Text variant={screenWidth < 769 ? "caption" : "body1"}>Continue Reading...</Text>
          </div>
        </Link>
      </div>
    </Card>
  );
}

export default FeaturedBlogItem;