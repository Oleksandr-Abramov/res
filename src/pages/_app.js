import Animation from "@/components/Animation/Animation";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Animation /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
