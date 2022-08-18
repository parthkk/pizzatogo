import React from "react";
import { Fragment } from "react";
import mealsImage from "../../assets/meals2.jpeg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>PizzaToGo</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Pizza iamge" />
      </div>
    </Fragment>
  );
};

export default Header;
