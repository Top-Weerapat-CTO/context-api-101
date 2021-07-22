import { useContext, useEffect } from "react";
import { fetchPostByUserId } from "./actions";
import { PostContext, PostDispatch } from "./PostContext";

export const usePost = (key) => {
  const state = useContext(PostContext);
  const dispatch = useContext(PostDispatch);
  useEffect(() => {
    if (!state.keys?.[key]?.isFetching) {
      console.log("fetchPostByUserId", key);
      fetchPostByUserId(state?.page)(dispatch);
    }
  }, [key]);
  return { state, dispatch };
};
