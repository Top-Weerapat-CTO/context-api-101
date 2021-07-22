import { Fragment, useContext } from "react";
import { StateContext } from "../_app";

const ContextExample = () => {
  const { title, setTitle } = useContext(StateContext);
  const handleChangeTitle = (e) => {
    setTitle(e?.target?.value);
  };
  return (
    <Fragment>
      <h2>{title}</h2>
      <input type="text" value={title} onChange={handleChangeTitle} />
    </Fragment>
  );
};

export default ContextExample;
