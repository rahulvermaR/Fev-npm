import React from "react";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import classes from "./Results.module.css";
export default function Results(props) {
  const checkedCpmponent = useSelector((st) => st.checkedCpmponent);
  const componets = props.data.map((ele) => {
    if (ele.package.name === checkedCpmponent) {
      return (
        <React.Fragment key={ele.package.name}>
          <Button package={ele.package} ischecked={true} />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment key={ele.package.name}>
        <Button package={ele.package} ischecked={false} />
      </React.Fragment>
    );
  });
  if (componets.length === 0)
    return <p className={classes.zeroLen}>Nothing to show!!</p>;

  return (
    <div className={classes.container}>
      <h2>Results</h2>
      <div className={classes.btnContainer}>{componets}</div>
    </div>
  );
}
