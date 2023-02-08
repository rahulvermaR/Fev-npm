import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageActions } from "../../Store/Store";
import classes from "./MyFevList.module.css";
export default function MyFevList(props) {
  const dispatch = useDispatch();
  let fevData = useSelector((st) => st.fev);
  const deleteHandler = (e) => {
    dispatch(pageActions.removeFevList(e.target.closest("div").id));
  };
  fevData = fevData.map((ele) => {
    return (
      <div
        key={ele.data.name}
        className={classes.card}
        id={ele.data.name}
        onClick={deleteHandler}
      >
        <p>
          Package : <span className={classes.span}>{ele.data.name}</span>
        </p>
        <p>Why : {ele.text}</p>
      </div>
    );
  });
  if (fevData.length === 0)
    return <p className={classes.zeroLen}>You Don't have fevorate Package</p>;
  return <section className={classes.container}>{fevData}</section>;
}
