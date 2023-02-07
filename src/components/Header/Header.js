import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
export default function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    console.log(width);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  });
  return (
    <header className={classes.container}>
      <img
        src="https://global-uploads.webflow.com/5d9d02c4b01a536c7d5d4a35/5d9f669141d3077765d2af5b_whimsical-logo-on-color%402x.png"
        className={classes.logo}
        alt="logo"
      />
      <div className={classes.navigationContainer}>
        {width >= 720 && (
          <nav>
            <div>PRICING</div>
            <div>CONTACT</div>
          </nav>
        )}

        <div className={classes.btnBox}>
          {width >= 720 && <button>sign Up</button>}
          <button className={classes.btnLogin}>Log in</button>
        </div>
      </div>
    </header>
  );
}
