import React, { useState } from "react";
import MyFevList from "./MyFevList";
import classes from "./MyFevList.module.css";
export default function FevDetails() {
  const [isfevClicked, setisfevClicked] = useState(false);

  return (
    <div className={classes.detailsCont}>
      <button
        className={classes.fevBtn}
        onClick={() => setisfevClicked((pre) => !pre)}
      >
        {!isfevClicked ? "MyFevList" : "Hide"}
      </button>
      {isfevClicked && <MyFevList isfevClicked={isfevClicked} />}
    </div>
  );
}
