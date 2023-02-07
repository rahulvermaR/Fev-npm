import React from "react";
import { useDispatch } from "react-redux";
import { pageActions } from "../../Store/Store";
import classes from "./Button.module.css";

export default function Button(props) {
  const dispatch = useDispatch();
  // const [checked, setChecked] = useState(false);
  const clickHandler = () => {
    if (props.ischecked) dispatch(pageActions.resetInitial());
    else
      dispatch(
        pageActions.setChecked({
          data: props.package,
          ischecked: !props.ischecked,
        })
      );
  };
  return (
    <div className={classes.btnOuterBox} onClick={clickHandler}>
      <input type="radio" onChange={() => {}} checked={props.ischecked} />
      <label>{props.package.name}</label>
    </div>
  );
}
