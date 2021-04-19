import Layout from "../components/Layout";
import '../styles/globals.scss';

interface Props {
  Component: React.FC;
  pageProps: object;
}

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} /> {/* Renders index page */}
    </Layout>
  );
}

export default MyApp;
