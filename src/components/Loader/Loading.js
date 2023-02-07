import React from "react";
import classes from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={classes.loadingCont}>
      <div className={classes.loading}>( o )</div>
    </div>
  );
}
