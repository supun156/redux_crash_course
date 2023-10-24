import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.items);
  const newPost = useSelector((state) => state.posts.item);

  // useState to handle the local state for posts
  const [localPosts, setLocalPosts] = useState(posts);

  useEffect(() => {
    fetchPosts(dispatch);

    // Check for a new post and update the local state accordingly
    if (newPost) {
      setLocalPosts((prevPosts) => [newPost, ...prevPosts]);
    }
  }, [newPost, dispatch]);

  const postItems = localPosts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

export default Posts;
