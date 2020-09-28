import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripecheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  const publishableKey =
    "pk_test_51HWSg1L7RCPlK3hHroUknEtZ0xG7seNADkzySGM1uPSEqVqwWPbxc1bUgR0yyPHDQ1RO4fDZ11mQLSnNLD6p7zS700bgkXlW81";
  return (
    <StripeCheckout
      label="Pay Now"
      name="E-COMMERCE SRL."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripecheckoutButton;
