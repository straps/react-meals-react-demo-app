import { useContext } from "react";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toFixed(2)}`;

  const onAddMeal = (amount) => {
    const item = { ...props, amount };
    console.log(item);
    cartCtx.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>€{price}</div>
      </div>
      <div>
        <MealItemForm onAdd={onAddMeal} />
      </div>
    </li>
  );
};

export default MealItem;
