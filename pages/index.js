import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen px-2 py-0 flex justify-center items-center">
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Hello</h1>
      </div>
    </Layout>
  );
}
