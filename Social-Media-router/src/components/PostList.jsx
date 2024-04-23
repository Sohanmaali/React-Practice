import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelComeMassage from "./WelComeMassage";
import LodingSpinner from "./LodingSpinner";
const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {fetching && <LodingSpinner />}
          {!fetching && postList.length === 0 && <WelComeMassage />}
          {!fetching &&
            postList.map((post, index) => <Post key={index} post={post} />)}
        </div>
      </div>
    </>
  );
};

export default PostList;
