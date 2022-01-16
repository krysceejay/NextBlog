import Head from "next/head"
import Notify from "../Notify"

const AuthLayout = ({ children, title = "" }) => {
  
  return  (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Notify />
      {children}
    </div>
  );
};

export default AuthLayout
