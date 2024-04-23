import { createContext } from "react";
import { useReducer } from "react";
// import { useContext } from "react";

export const PostList = createContext();

/*export const PostList = createContext({
  postList: [],
  appPost: () => {},
  deletePost: () => {},
});
*/

const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId //Add or Delete Data add or delete operation
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_Initial_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  //use Context ^
  const [postList, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (postId, postTitle, postBody, postReactions, postTag) => {
    return dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: postReactions,
        userId: postId,
        tags: postTag,
      },
    });
  };
  const addInitialPosts = (posts) => {
    return dispatchPostList({
      type: "ADD_Initial_POSTS",
      payload: {
        posts: posts,
      },
    });
  };
  const deletePost = (postId) => {
    return dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, deletePost, addInitialPosts }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [];
export default PostListProvider;
