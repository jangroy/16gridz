import React from "react";
import { LoadingWrapper, Spinner, Dot, Dot2 } from "./styles";

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
