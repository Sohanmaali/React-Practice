import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelComeMassage from "./WelComeMassage";
import LodingSpinner from "./LodingSpinner";
const PostList = () => {
  const { postList, addInitialPosts, addPost } = useContext(PostListData);
  const [fetching, setfetch] = useState(false);
  useEffect(() => {
    setfetch(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setfetch(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          {fetching && <LodingSpinner />}
          {!fetching && postList.length === 0 && <WelComeMassage />}
          {!fetching && postList.map((post) => <Post key={post} post={post} />)}
        </div>
      </div>
    </>
  );
};

export default PostList;
