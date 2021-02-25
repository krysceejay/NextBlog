import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, title }) => {
  return  (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
