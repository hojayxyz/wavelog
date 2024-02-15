import supabase from "../components/supabase";

async function getPosts() {
  let { data: postings, error } = await supabase.from("postings").select("*");
  //   const data = await res.json();
  console.log(postings);
  console.log(error);
}

function Blog() {
  return (
    <div>
      <div>Blog postings</div>
      <button onClick={getPosts}>Post</button>
    </div>
  );
}

export default Blog;
