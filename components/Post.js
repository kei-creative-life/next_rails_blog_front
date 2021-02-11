const Post = ({ post }) => {
  return (
    <div className="mb-2">
      <span>{post.id}</span>
      {" : "}
      <span className="cursor-pointer hover:bg-gray-200">{post.title}</span>
      <p className="cursor-pointer hover:bg-gray-200">{post.content}</p>
    </div>
  );
};

export default Post;
