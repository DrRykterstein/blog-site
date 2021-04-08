import React from "react";
import { fetchPosts } from "../api/fetchPostData";
import { Grid } from "@material-ui/core";
import ScreenSizeProvider from "../contexts/screenSizeContext";
import Components from "../components/Components";
import homeStyles from "../styles/Home.module.scss";

export default function Home({ posts }) {
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

// Fetch API data at build time
export const getStaticProps = async () => {
  const posts = await fetchPosts();

  return {
    props: {
      posts
    }
  };
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts
//     }
//   };
// }

