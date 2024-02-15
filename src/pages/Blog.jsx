import { useState } from "react";
import supabase from "../components/supabase";

function Blog() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    let { data: postings, error } = await supabase.from("postings").select("*");
    //   const data = await res.json();
    console.log(postings);
    console.log(error);
    setPosts(postings);
  }
  return (
    <div>
      <div>Blog postings</div>
      <button
        className="rounded-full bg-yellow-300 px-4 py-2"
        onClick={getPosts}
      >
        Load Posts
      </button>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3 className="font-semibold">{post.post_title}</h3>
            <p>{post.post_content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
