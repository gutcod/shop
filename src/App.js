import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSingOutPage from "./pages/sing-in-sign-out/sing-in-sign-out.component";
import CheckoutPage from "./pages/checkout/chekcout.component";

import { selectCurentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

const App = () => {
  const currentUser = useSelector(selectCurentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <SingInAndSingOutPage />)}
        />
      </Switch>
    </div>
  );
};

// const mapStateTotProps = createStructuredSelector({
//   currentUser: selectCurentUser,
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     checkUserSession: () => {
//       dispatch(checkUserSession());
//     },
//   };
// };

export default App;
