import styled from "styled-components";

export const SHome = styled.div`
  padding: 20px;
  .cart-header {
    position: fixed;
    right: 40px;
    z-index: 3;
    top: 100px;
    cursor: pointer;
    .total-cart {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: red;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -10px;
      right: -5px;
      color: white;
    }
  }
  .total {
    font-size: 26px;
    color: violet;
  }
  .filter {
    display: flex;
    align-items: center;
    .input {
      padding: 10px 20px;
      border: 1px solid gray;
      border-radius: 5px;
      display: flex;
      align-items: center;
      input {
        border: none;
        outline: none;
        margin-left: 5px;
      }
    }
  }
  .list-products {
    display: grid;
    padding-top: 20px;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
  }
`;