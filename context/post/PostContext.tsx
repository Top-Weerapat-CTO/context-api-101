import React, { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import { initialState, postReducer } from "./reducer";

export const PostContext = React.createContext(initialState);
export const PostDispatch = React.createContext(() => null);

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(postReducer, initialState);
  return (
    <PostContext.Provider value={state}>
      <PostDispatch.Provider value={dispatch}>{children}</PostDispatch.Provider>
    </PostContext.Provider>
  );
};

export default PostContextProvider;
