import axios from "axios";
import {
  FETCH_POST_BY_ID_FAILURE,
  FETCH_POST_BY_ID_REQUEST,
  FETCH_POST_BY_ID_SUCCESS,
} from "./actionTypes";

export const increment = () => ({ type: "increment" });
export const decrement = () => ({ type: "decrement" });
export const reset = () => ({ type: "reset" });

export const fetchPostByUserIdRequest = ({ key }) => ({
  type: FETCH_POST_BY_ID_REQUEST,
  key,
});
export const fetchPostByUserIdSuccess = ({ data, key }) => ({
  type: FETCH_POST_BY_ID_SUCCESS,
  key,
  data,
});
export const fetchPostByUserIdFailure = ({ error, key }) => ({
  type: FETCH_POST_BY_ID_FAILURE,
  key,
  error,
});

export const fetchPostByUserId = (key) => (dispatch) => {
  dispatch(fetchPostByUserIdRequest({ key }));
  axios(`https://jsonplaceholder.typicode.com/posts?userId=${key}`)
    .then(({ data }) => dispatch(fetchPostByUserIdSuccess({ data, key })))
    .catch((error) => dispatch(fetchPostByUserIdFailure({ error, key })));
};
