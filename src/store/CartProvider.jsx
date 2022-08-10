import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const items = state.items.concat();
    const existingItem = items.find((item) => item.id === action.item.id);

    if (existingItem) existingItem.amount += action.item.amount;
    else items.push({ ...action.item });

    return {
      //utilizzo della concat per creare un nuovo array
      items,
      totalAmount: state.totalAmount + action.item.price * action.item.amount
    };
  }
  if (action.type === "REMOVE") {
    const items = state.items.concat();
    const item = items.find((item) => item.id === action.id);
    item.amount--;
    if (item.amount < 1) {
      items.splice(items.indexOf(item), 1);
    }
    return {
      totalAmount: state.totalAmount - item.price,
      items: items
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
