import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const cartItemsNr = cartContext.items.reduce((cur, item) => {
    return cur + item.amount;
  }, 0);

  //Effetto bump sul pulsante
  const [btnBumping, setBtnBumping] = useState(false);
  useEffect(() => {
    if (cartContext.items.length) {
      setBtnBumping(true);
    }
    return clearTimeout.bind(null, setTimeout(setBtnBumping, 300, false));
  }, [cartContext.items]);

  const buttonClasses = `${classes.button} ${btnBumping ? classes.bump : ""}`;

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsNr}</span>
    </button>
  );
};

export default HeaderCartButton;
