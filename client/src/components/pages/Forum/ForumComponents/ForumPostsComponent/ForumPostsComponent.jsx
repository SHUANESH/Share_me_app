import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import ForumPostComponent from "../ForumPostComponent/ForumPostComponent";
import { useSelector } from "react-redux";
import "./posts.css";

const ForumPostsComponent = ({ setCurrentId }) => {
  debugger;
  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts)
  if(!posts.length && !isLoading) return "No Posts";
  return isLoading ? (
    <CircularProgress />
  ) : (
    <ul className="posts">
     
      {posts?.map((post,index) => (
        <li key={index}>
          <ForumPostComponent post={post} setCurrentId={setCurrentId} />
        </li>
      ))}
    </ul>
  );
};

export default ForumPostsComponent;
