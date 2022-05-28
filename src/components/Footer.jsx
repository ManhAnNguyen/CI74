import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>Give me your hand</SFooter>;
};

const SFooter = styled.footer`
  background-color: #13c1c1;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
`;
