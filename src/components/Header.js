import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import SignIn from "./SignIn";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
`;

const Header = props => {
  return (
    <HeaderWrapper>
      <SignIn />
    </HeaderWrapper>
  );
};

export default Header;
