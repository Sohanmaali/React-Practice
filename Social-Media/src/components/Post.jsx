import React from "react";
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <MdDelete />
          </span>

          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary me-3" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions mt-3" role="alert">
            This Post has been Reacted by {post.reactions} peoples
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
