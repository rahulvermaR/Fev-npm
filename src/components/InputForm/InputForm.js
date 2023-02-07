import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { pageActions } from "../../Store/Store";
import classes from "./InputForm.module.css";
import { GoMarkGithub } from "react-icons/go";
import { RiNpmjsLine } from "react-icons/ri";
export default function InputForm(props) {
  const dispatch = useDispatch();
  const textValue = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!textValue.current.value.trim()) return;
    // console.log(textValue.current.value);
    dispatch(
      pageActions.setFev({
        data: props.data,
        text: textValue.current.value,
      })
    );
    dispatch(pageActions.resetInitial());
    textValue.current.value = "";
  };
  return (
    <div className={classes.container}>
      <h2>
        Package Name : <span className={classes.span}>{props.data.name}</span>{" "}
      </h2>
      <div className={classes.linkBox}>
        <a href={props.data?.links?.npm} target="_blank" rel="noreferrer">
          <RiNpmjsLine className={classes.logo} />
        </a>
        <a
          href={props.data?.links?.repository}
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub className={classes.logo} />
        </a>
        <div>Current Version : {props.data?.version}</div>
      </div>

      <form className={classes.form} onSubmit={submitHandler}>
        <label>Why this is Your Fev?</label>
        <textarea ref={textValue} placeholder="Enter your text " />
        <div className={classes.btnBox}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
