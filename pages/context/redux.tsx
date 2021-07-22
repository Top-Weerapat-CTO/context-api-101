import { Fragment, useContext, useEffect } from "react";
import {
  reset,
  increment,
  decrement,
  fetchPostByUserId,
} from "../../context/post/actions";
import { usePost } from "../../context/post/hooks";
import { PostContext } from "../../context/post/PostContext";

const ContextExample = () => {
  const { page, keys, title } = useContext(PostContext);
  const { dispatch } = usePost(page);
  const posts = keys?.[page]?.data || [];
  const error = keys?.[page]?.error;
  return (
    <Fragment>
      <h2>{title}</h2>
      Page: {page}
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <h2>Post Data : User ID = {page}</h2>
      {error ? (
        <div>Data is not found.</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default ContextExample;
