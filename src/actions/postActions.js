import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts",{mode: 'cors'})
    .then((res) => res.json())
    .then((posts) => {
      console.log(posts);
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      });
    });
};

export const createPost = (postData, dispatch, b) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) =>
      dispatch({
        // type: NEW_POST,
        payload: post,
      })
    );
};
