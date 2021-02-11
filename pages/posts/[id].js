import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

// Postコンポーネント
export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.title}>
      <div className="min-h-screen px-2 py-0 ">
        <p className="m-4">
          {"ID : "}
          {post.id}
        </p>
        <p className="m-4">
          {"title : "}
          {post.title}
        </p>
        <p className="m-4">
          {"content : "}
          {post.content}
        </p>
        <Link href="/blog-page">
          <button className="bg-gray-800 text-white p-3 m-4 hover:bg-gray-600">
            Back to previous page.
          </button>
        </Link>
      </div>
    </Layout>
  );
}

// ビルド時にidの一覧を取得する
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// ビルド時にidに対応する記事のデータを取得する
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}
