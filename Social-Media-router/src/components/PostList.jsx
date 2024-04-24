import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelComeMassage from "./WelComeMassage";
import LodingSpinner from "./LodingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  // const { postList } = useContext(PostListData);
  const postList = useLoaderData();
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {/* {<LodingSpinner />} */}
          {postList.length === 0 && <WelComeMassage />}
          {postList.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
      // setfetch(false);
    });
};
export default PostList;
