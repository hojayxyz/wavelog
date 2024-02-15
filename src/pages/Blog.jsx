import { useState } from "react";
import supabase from "../components/supabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function Blog() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const { data: postings, error } = await supabase
      .from("postings")
      .select("*");
    //   const data = await res.json();
    if (error) {
      console.log(error);
      throw new Error("Blog postings not loaded");
    }
    return postings;
  }

  async function deletePost(id) {
    const { data, error } = await supabase
      .from("postings")
      .delete()
      .eq("id", id);
    if (error) {
      console.log(error);
      throw new Error("Posting could not be deleted");
    }
    return data;
  }

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      alert("Post successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["postings"],
      });
    },
    onError: (err) => alert(err.message),
  });

  const {
    isLoading,
    data: postingsData,
    error,
  } = useQuery({
    queryKey: ["postings"],
    queryFn: getPosts,
  });
  if (isLoading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h2 className="my-2 text-center text-xl font-semibold">Blog postings</h2>
      {postingsData.map((post) => (
        <div className="m-5 border-b-2 pb-5" key={post.id}>
          <span>{post.id}</span>
          <h3 className="font-semibold">{post.post_title}</h3>
          <p>{post.post_content}</p>
          <img
            className="m-2 max-h-36"
            src={
              post.imgURL
                ? post.imgURL
                : "https://xnbwrqfptoncsooqxhyc.supabase.co/storage/v1/object/sign/posting-picture/atlas1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3N0aW5nLXBpY3R1cmUvYXRsYXMxLmpwZyIsImlhdCI6MTcwODAxNjAxMCwiZXhwIjoxNzM5NTUyMDEwfQ.Y6BGp0qbAHUXrFXDPrT84pFhyldmgjmND-BwXlszRW8&t=2024-02-15T16%3A53%3A30.926Z"
            }
          />
          <button
            className="rounded-full bg-gray-300 px-3 py-2 text-sm disabled:bg-gray-800"
            onClick={() => mutate(post.id)}
            disabled={isDeleting}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Blog;
