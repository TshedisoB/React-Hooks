import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [comment, setComment] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return comment + name;
    },
    [comment]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}>
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
