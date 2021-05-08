import React, { memo } from "react";
import styled from "styled-components";

// Buffet components
import { Header } from "@buffetjs/custom";
import { Table } from "@buffetjs/core";

const Wrapper = styled.div`
  padding: 18px 30px;

  p {
    margin-top: 1rem;
  }
`;

const HomePage = () => {
  const headers = [
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Description",
      value: "description",
    },
    {
      name: "Url",
      value: "html_url",
    },
  ];

  const rows = [
    {
      name: "landing-page",
      description: "Code to the sales landing page",
      html_url: "https://github.com/React-Avancado/landing-page",
    },
    {
      name: "links-estudo",
      description: "Links interessantes sobre tudo abordado no curso",
      html_url: "https://github.com/React-Avancado/links-estudo",
    },
    {
      name: "boilerplate",
      description: "Boilerplate to use in our React Avançado course",
      html_url: "https://github.com/React-Avancado/boilerplate",
    },
    {
      name: "reactavancado-extesion-pack",
      description:
        "A collection of extension that we use at ReactAvancado.com.br course",
      html_url: "https://github.com/React-Avancado/reactavancado-extesion-pack",
    },
  ];
  return (
    <Wrapper>
      <Header
        title={{ label: "React Avançado Repositories" }}
        content="A list of our repositoriees in React Avançado couse."
      />
      <Table headers={headers} rows={rows} />
    </Wrapper>
  );
};

export default memo(HomePage);
