import React, { useContext, useState } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import PostContextProvider from "../context/post/PostContext";

export const StateContext = React.createContext({
  title: "Context Example 2",
  setTitle: () => null,
});

function MyApp({ Component, pageProps }: AppProps) {
  const context = useContext(StateContext);
  const [title, setTitle] = useState(context.title);
  const value = {
    title,
    setTitle,
  };
  return (
    <StateContext.Provider value={value}>
      <PostContextProvider>
        <Component {...pageProps} />
      </PostContextProvider>
    </StateContext.Provider>
  );
}
export default MyApp;
