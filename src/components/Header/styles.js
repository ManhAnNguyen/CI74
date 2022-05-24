import styled from "styled-components";

export const SHeader = styled.header`
  background-color: blueviolet;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  color: white;
  .cart {
    display: flex;
    align-items: center;
    cursor: pointer;
    .amount {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;
    }
  }
`;
