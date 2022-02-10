import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { ButtonsBarContainer, SignInContainer, SignInTitle } from "./sign-in.style";
import { connect } from "react-redux";
import { googleSigninStart, emailSigninStart } from "../../redux/user/user.action";

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [userCredential, setUserCredential] = useState({ email: "", password: "" });
  const { email, password } = userCredential;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSigninStart(email, password);
  };
  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='email'
          required
        />

        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />

        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={googleSigninStart} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => {
    dispatch(googleSigninStart());
  },
  emailSigninStart: (email, password) => {
    dispatch(emailSigninStart({ email, password }));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
