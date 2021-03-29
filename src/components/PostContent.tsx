import React from "react";
import Link from "next/link";
import { Grid } from "@material-ui/core";
import { Post } from "../data";
import Components from "./Components";
import Text from "../controls/Text";

interface PostStyles {
  lining: string;
  linkHome: string;
}

interface Props {
  post: Post;
  otherPosts: Array<Post>
  postStyles: any;
}

const PostContent: React.FC<Props> = ({ post, otherPosts, postStyles }) => {
  const { lining, linkHome } = postStyles;
  const { OtherPosts } = Components;

  return (
    <React.Fragment>
      <Grid item md={8}>
        <Text>{post.title}</Text>
        <div className={lining} />
        <Text variant="body1">{post.body}</Text>
        <Link href="/"><a className={linkHome}>Go back</a></Link>
      </Grid>
      <Grid item md={4}>
        <Text>Other Posts</Text>
        <div className={lining} />
        <Grid container spacing={2}>
          {otherPosts.map((otherPost: any, idx: number) => (
            <Grid key={idx} item>
              <OtherPosts otherPost={otherPost} />
            </Grid>
          ))} 
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PostContent;