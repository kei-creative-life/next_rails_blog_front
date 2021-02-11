import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div className="mb-2">
      <span>{post.id}</span>
      {" : "}

      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer hover:text-blue-700">{post.title}</span>
      </Link>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
