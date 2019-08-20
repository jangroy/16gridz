import React from "react";
import styled, { keyframes } from "styled-components";
const skBounce = keyframes`
    0%, 100% { 
        transform: scale(0.0);
    } 50% { 
        transform: scale(1.0);
    }
`;

const skRotate = keyframes`
    100% { 
        transform: rotate(360deg); 
        -webkit-transform: rotate(360deg);
    }
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const Spinner = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  animation: ${skRotate} 2s infinite linear;
`;

const Dot = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background: #f12711;
  background: linear-gradient(to right, #f5af19, #f12711);

  border-radius: 100%;
  animation: ${skBounce} 2s infinite ease-in-out;
`;
const Dot2 = styled(Dot)`
  top: auto;
  bottom: 0;
  animation-delay: -1s;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner>
        <Dot />
        <Dot2 />
      </Spinner>
    </LoadingWrapper>
  );
};

export default Loading;
