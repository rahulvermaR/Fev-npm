import React, { useEffect, useState } from "react";
import useHttp from "../../Hooks/use-http";
import Loading from "../Loader/Loading";
import Results from "../Result/Results";
import classes from "./Content.module.css";
export default function SearchHeapler(props) {
  const [data, setdata] = useState([]);

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.searchText?.trim()) {
        sendRequest(
          `https://api.npms.io/v2/search?q=${props.searchText}`,
          setdata
        );
      } else {
        setdata([]);
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [props.searchText]);
  if (isLoading) return <Loading />;
  return (
    <div>
      {error && <p className={classes.error}>{error}</p>}
      <Results data={data} />
    </div>
  );
}
