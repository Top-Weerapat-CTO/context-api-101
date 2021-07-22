import React, { useReducer } from "react";
import { initialState, postReducer } from "./reducer";

export const PostContext = React.createContext(initialState);
export const PostDispatch = React.createContext(() => null);

const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return (
    <PostContext.Provider value={state}>
      <PostDispatch.Provider value={dispatch}>{children}</PostDispatch.Provider>
    </PostContext.Provider>
  );
};

export default PostContextProvider;
