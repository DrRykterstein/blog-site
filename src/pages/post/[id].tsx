import React from "react";
import { posts } from "../../data";
import { Grid } from "@material-ui/core";
import Components from "../../components/Components";
import Text from "../../controls/Text";
import postStyles from "../../styles/post.module.scss";

const post = ({ post, otherPosts }) => {
  const { container } = postStyles;
  const { Meta, Banner, PostContent } = Components;
  const { title, excerpt, date } = post;

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

// Fetch current post and other posts
export const getServerSideProps = ({ params: { id } }) => {
  let post = [], otherPosts = [];

  // Delineate between the current post and other posts
  posts.forEach(p => p.id ! === id ? post.push(p) : otherPosts.push(p));

  return {
    props: {
      post: post[0],
      otherPosts
    }
  }
}

// export const getStaticProps = async (context: any) => {
//   const data = await fetchPost(context.params.id);

//   // Extract matching post as well as the other posts from data
//   let { post, otherPosts } = data;

//   return {
//     props: {
//       post,
//       otherPosts
//     }
//   };
// }

// export const getStaticPaths = async () => {
//   const posts = await fetchPosts();

//   // Get post id's and store each id within our paths
//   const idList = posts.map((post: any) => post.id);
//   const paths = idList.map((id: number) => ({
//     params: { id: id.toString() }
//   }));

//   return {
//     paths,
//     fallback: false
//   };
// }

export default post;
