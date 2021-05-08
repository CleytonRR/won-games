import React, { useState, useEffect, memo } from "react";
import styled from "styled-components";
import axios from "axios";

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
  const [rows, setRows] = useState([]);
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

  useEffect(() => {
    axios
      .get("https://api.github.com/users/React-avancado/repos")
      .then((res) => setRows(res.data))
      .catch((e) =>
        strapi.notification.error(`Ops... github API limit exceeded. ${e}`)
      );
  }, []);

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
