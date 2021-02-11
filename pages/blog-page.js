import Layout from "../components/Layout";
import { getAllPostsData } from "../lib/posts";
import Post from "../components/Post";

const Blog = ({ posts }) => {
  return (
    <Layout title="Blog">
      <div className="min-h-screen px-2 py-0 flex justify-center items-center">
        <ul className="m-10 text-black">
          {posts && posts.map((post) => <Post key={post.id} post={post} />)}
        </ul>
      </div>
    </Layout>
  );
};

export default Blog;

// getStaticPropsは、ビルド時に実行される。
export async function getStaticProps() {
  const posts = await getAllPostsData();
  return { props: { posts } };
}
