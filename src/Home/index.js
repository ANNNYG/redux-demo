import React, { useState } from "react";

import { actions } from "./slice";

import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [inpValue, setInpValue] = useState("");

  const dispatch = useDispatch();
  const { name } = useSelector((state) => ({
    name: state.home.name,
  }));

  const handleClick = () => {
    dispatch(actions.actionName(inpValue));
  };

  const handleInp = ({ target }) => {
    setInpValue(target.value);
  };

  return (
    <div>
      <h2>home的数据</h2>
      <div>name: {name}</div>
      <input placeholder="请输入要改的名字" onInput={handleInp} />
      <button onClick={handleClick}>change data</button>
    </div>
  );
};

export default Home;
