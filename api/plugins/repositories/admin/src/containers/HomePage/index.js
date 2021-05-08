import React, { memo } from "react";
import styled from "styled-components";

// Buffet components
import { Header } from "@buffetjs/custom";

const Wrapper = styled.div`
  padding: 18px 30px;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <Header
        title={{ label: "React Avançado Repositories" }}
        content="A list of our repositoriees in React Avançado couse."
      />
    </Wrapper>
  );
};

export default memo(HomePage);
