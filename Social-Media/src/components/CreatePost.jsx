import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const userPostTitleElement = useRef();
  const userPostBodyElement = useRef();
  const userPostReactionsElement = useRef();
  const userPostTagElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const postId = userIdElement.current.value;
    const postTitle = userPostTitleElement.current.value;
    const postBody = userPostBodyElement.current.value;
    const postReactions = userPostReactionsElement.current.value;
    const postTag = userPostTagElement.current.value.split(" ");

    userIdElement.current.value = "";
    userPostTitleElement.current.value = "";
    userPostBodyElement.current.value = "";
    userPostReactionsElement.current.value = "";
    userPostTagElement.current.value = "";

    addPost(postId, postTitle, postBody, postReactions, postTag);
  };

  return (
    <>
      <form className="create-post" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="userId">User Id</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            aria-describedby="emailHelp"
            placeholder="Enter User Id"
            ref={userIdElement}
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
            ref={userPostTitleElement}
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
            ref={userPostBodyElement}
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
            ref={userPostReactionsElement}
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
            ref={userPostTagElement}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
