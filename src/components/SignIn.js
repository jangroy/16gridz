import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import * as firebaseui from "firebaseui";
import { FirebaseContext } from "../context";

const SignInWrapper = styled.div`
  background: red;
  height: 100%;
  flex: 1;
  display: flex;
`;

const SignInButton = styled.button`
  width: 50px;
  height: 50px;
`;

const SignIn = () => {
  const context = useContext(FirebaseContext);

  const handleSignIn = () => {
    context.ui.start("#firebaseui-auth-container", context.uiConfig);
  };

  return (
    <SignInWrapper id="firebaseui-auth-container">
      <SignInButton onClick={handleSignIn}>Sign In</SignInButton>
    </SignInWrapper>
  );
};

export default SignIn;
