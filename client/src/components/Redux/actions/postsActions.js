import fetcher from "../../../utils/fetcher";
import {
  FETCH_ALL,
  UPDATE,
  CREATE,
  DELETE,
  START_LOADING,
  STOP_LOADING,
  FETCH_POST,
  COMMENT,
} from "../actions/types";
import jwt_decode from "jwt-decode";


export const getPost = (id) => async (dispatch) => {
  debugger;
  dispatch({ type: START_LOADING });
  await fetcher(`/api/forum/${id}`)
    .then((response) => {
      dispatch({
        type: FETCH_POST,
        payload: response,
      });
    })
    .catch((err) => console.log(err));
  dispatch({ type: STOP_LOADING });
};

export const getPosts = (page) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  await fetcher(`/api/forum/all?page=${page}`)
    .then((response) => {
      dispatch({
        type: FETCH_ALL,
        payload: response,
      });
    })
    .catch((err) => console.log(err));
  dispatch({ type: STOP_LOADING });
};


export const createPostUser = (post, history) => async (dispatch) => {
  const token = localStorage.getItem("jwtToken");
  const user = jwt_decode(token);
  try {
    await fetcher(`/api/forum/user`, {
      method: "POST",
      body: JSON.stringify({
        post,
        _id: user._id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        debugger;
        dispatch({
          type: CREATE,
          payload: res.data,
        });
        history.push(`/forum/${res.data._id}`);
      });
        dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  const token = localStorage.getItem("jwtToken");
  const user = jwt_decode(token);
  try {
    await fetcher(`/api/forum/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        post,
        _id: user._id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: UPDATE,
          payload: res.data,
        })
      );
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (id, value) => async (dispatch) => {
  debugger;
  const token = localStorage.getItem("jwtToken");
  const user = jwt_decode(token);
  try {
    const data = await fetcher(`/api/forum/${id}/commentPost`, {
      method: "POST",
      body: JSON.stringify({
        value,
        _id: user._id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    }).then((res) => res)
        dispatch({
          type: COMMENT,
          payload: data,
        });
     return data.comments
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({ type: START_LOADING });
  try {
    const data = await fetcher(`/api/forum/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res) => res.json())
      
        dispatch({
          type: DELETE,
          payload:data.result._id,
        })
        
       dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};
