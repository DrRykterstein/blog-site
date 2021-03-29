import React from "react";
import Components from "./Components";
import styles from "../styles/Layout.module.scss";

const Layout: React.FC = ({ children }) => {
  const { Meta, Nav } = Components;
  const { title, keywords, description } = metaData;

  return (
    <React.Fragment>
      <Meta 
        title={title}
        keywords={keywords} 
        description={description} 
      />
      <div className={styles.container}>
        <Nav />
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </React.Fragment>
  );
}

// Set default values for Meta component props
const metaData = {
  title: "Web Dev Blog",
  keywords: "web development, programming",
  description: "Get the latest news in web dev"
};

export default Layout;