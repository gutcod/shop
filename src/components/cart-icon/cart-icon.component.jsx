import React from "react";
import { ReactComponent as ShoppingCard } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingCard className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
