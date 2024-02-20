import { useForm } from "react-hook-form";
import supabase from "./supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

async function postBlogPost(newPost) {
  const imageName = `${Math.random()}`;
  const imagePath = `https://xnbwrqfptoncsooqxhyc.supabase.co/storage/v1/object/public/posting-picture/${imageName}`;

  const { data, error } = await supabase
    .from("postings")
    .insert([{ ...newPost, imgURL: imagePath }]);

  if (error) {
    throw new Error("Blog post not created");
  }

  // Upload image
  // Upload file using standard upload
  const { error: uploadError } = await supabase.storage
    .from("posting-picture")
    .upload(imageName, newPost.imgURL);
  if (uploadError) {
    // Handle error
    console.log(uploadError);
  } else {
    // Handle success
  }

  return data;
}

function CreateBlogPost() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading: isPosting } = useMutation({
    mutationFn: postBlogPost,
    onSuccess: () => {
      toast.success("New Post successfully posted");
      queryClient.invalidateQueries({ queryKey: ["postings"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({ ...data, imgURL: data.imgURL[0] });
  }

  //   https://xnbwrqfptoncsooqxhyc.supabase.co/storage/v1/object/sign/posting-picture/0.02433879538714101-Total_Recall_Logo_1-removebg-preview.png
  //   https://xnbwrqfptoncsooqxhyc.supabase.co/storage/v1/object/sign/posting-picture/0.02433879538714101-Total_Recall_Logo_1-removebg-preview.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3N0aW5nLXBpY3R1cmUvMC4wMjQzMzg3OTUzODcxNDEwMS1Ub3RhbF9SZWNhbGxfTG9nb18xLXJlbW92ZWJnLXByZXZpZXcucG5nIiwiaWF0IjoxNzA4MDczMjY5LCJleHAiOjE3Mzk2MDkyNjl9.pbkvMo7sUcSm6QgWa17D0Xhmqa9-p391VBcQ2VEXgXU&t=2024-02-16T08%3A47%3A50.372Z
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 bg-purple-200 p-5 text-sm"
    >
      <p className="text-xl font-bold">Create New Post</p>
      <div>
        <label>Post Title : </label>
        <input type="text" id="post_title" {...register("post_title")} />
      </div>
      <div>
        <label>Post Content : </label>
        <textarea type="text" id="post_content" {...register("post_content")} />
      </div>
      <div>
        <label>Upload an image : </label>
        <input
          type="file"
          accept="image/*"
          id="imgURL"
          {...register("imgURL")}
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          className="bg-stone-300 px-3 py-2 text-sm transition-all hover:bg-stone-400"
          type="reset"
        >
          Cancel
        </button>
        <button
          disabled={isPosting}
          className="bg-green-300 px-3 py-2 text-sm transition-all hover:bg-green-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateBlogPost;
