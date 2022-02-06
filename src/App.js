import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SingInAndSingOutPage from "./pages/sing-in-sign-out/sing-in-sign-out.component";
import CheckoutPage from "./pages/checkout/chekcout.component";

import { connect } from "react-redux";
import { selectCurentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import "./App.css";
import { checkUserSession } from "./redux/user/user.action";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  render() {
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
            render={() => (this.props.currentUser ? <Redirect to='/' /> : <SingInAndSingOutPage />)}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateTotProps = createStructuredSelector({
  currentUser: selectCurentUser,
});

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession: () => {
      dispatch(checkUserSession());
    },
  };
};

export default connect(mapStateTotProps, mapDispatchToProps)(App);
