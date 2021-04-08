import React from "react";
import { server } from "../../config/config";
import { Grid } from "@material-ui/core";
import Components from "../../components/Components";
import Text from "../../controls/Text";
import postStyles from "../../styles/post.module.scss";

const post = ({ post, otherPosts }) => {
  const { container } = postStyles;
  const { Meta, Banner, PostContent } = Components;
  const { title, excerpt, date } = post;

  // Alternative method for obtaining the post id client side
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <React.Fragment>
      <Meta 
        title={title}
        description={excerpt}
      />
      <div className={container}>
        <Banner post={post} />
          <Text color="textSecondary" variant="subtitle2">{date}</Text>
        <Grid container spacing={3}>
          <PostContent 
            post={post} 
            otherPosts={otherPosts}
            postStyles={postStyles} 
          />
        </Grid>
      </div>
    </React.Fragment>
  );
}

// Fetch data 
export const getStaticProps = async (context: any) => {
  const res = await fetch(`
    ${server}/api/posts/${context.params.id}
  `);
  const postData = await res.json();

  // Extract matching post as well as the other posts from data
  let { post, otherPosts } = postData;

  return {
    props: {
      post,
      otherPosts
    }
  };
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/posts`);
  const posts = await res.json();

  // Get post id's and store each id within our paths
  const idList = posts.map((post: any) => post.id);
  const paths = idList.map((id: number) => ({
    params: { id: id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export default post;
