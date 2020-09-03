import React from "react";
import "./cart.style.scss";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHEKOUT</CustomButton>
    </div>
  );
};
export default CartDropdown;
