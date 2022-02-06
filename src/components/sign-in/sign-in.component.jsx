import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { ButtonsBarContainer, SignInContainer, SignInTitle } from "./sign-in.style";
import { connect } from "react-redux";
import { googleSigninStart, emailSigninStart } from "../../redux/user/user.action";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSigninStart } = this.props;

    emailSigninStart(email, password);
  };
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSigninStart } = this.props;
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  googleSigninStart: () => {
    dispatch(googleSigninStart());
  },
  emailSigninStart: (email, password) => {
    dispatch(emailSigninStart({ email, password }));
  },
});

export default connect(null, mapDispatchToProps)(SignIn);
