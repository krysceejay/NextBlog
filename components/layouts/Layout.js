import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";
import Notify from "../Notify";

const Layout = ({ children, title }) => {
  return  (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Notify />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
