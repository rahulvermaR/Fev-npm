import { useState } from "react";
import { useDispatch } from "react-redux";
import { pageActions } from "../../Store/Store";
import classes from "./Content.module.css";
import SearchBar from "./SearchHealper";

export default function ContentSearch() {
  const dispatch = useDispatch();

  const [searchValue, setserchValue] = useState("");
  const changeHandler = (e) => {
    if (e.target.value) setserchValue(e.target.value);
    else setserchValue("");
    dispatch(pageActions.resetInitial());
  };

  return (
    <div className={classes.inputContainer}>
      <h2>Search for NPM Packages</h2>
      <input
        value={searchValue}
        onChange={changeHandler}
        placeholder="Search for NPM Packages"
      />
      <SearchBar searchText={searchValue} />
    </div>
  );
}
