import React from "react";
import { ReactComponent as ShoppingCard } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingCard className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispathToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispathToProps)(CartIcon);
