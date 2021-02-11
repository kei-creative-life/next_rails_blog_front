import fetch from "node-fetch";
const apiUrl = "http://localhost:3001/api/v1/posts";

// responseの形に注意する！変換されるJSONはRailsのコントローラーを参照。
// Postの一覧データを取得する
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const resJson = await res.json();
  const posts = resJson.data;
  return posts;
}

// idの一覧を取得する
export async function getAllPostIds() {
  const res = await fetch(new URL(apiUrl));
  const resJson = await res.json();
  const posts = resJson.data;

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

// post/idを取得する
export async function getPostData(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}/`));
  const resJson = await res.json();
  const post = resJson.data;

  return post;
}
