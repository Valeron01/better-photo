import classes from "./Header.module.scss";
import React from "react";

function Header() {
    return (
        <header className={classes.Header}>
            <h1>Better Photo</h1>
        </header>
    );
}

export default Header