import fetch from "node-fetch";
const apiUrl = "http://localhost:3001/api/v1/posts";

// responseの形に注意する！変換されるJSONはRailsのコントローラーを参照。
export async function getAllPostsData() {
  const res = await fetch(new URL(apiUrl));
  const resJson = await res.json();
  const posts = resJson.data;
  return posts;
}
