import React from "react";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <>
      <Form className="create-post" method="POST">
        <div className="form-group">
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            placeholder="Enter User Id"
            name="postId"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Post Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter post Title"
            name="postTitle"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body</label>
          <input
            type="text"
            className="form-control"
            id="body"
            aria-describedby="emailHelp"
            placeholder="Enter Body Text"
            name="body"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reactions">Reactions</label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="Enter Reactions"
            name="reactions"
          />
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Enter Tags"
            name="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Post
        </button>
      </Form>
    </>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
