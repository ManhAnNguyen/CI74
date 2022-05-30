import styled from "styled-components";

export const SProduct = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  .cart {
    position: absolute;
    color: gray;
    font-size: 25px;
    cursor: pointer;
    right: 10px;
    top: 80%;
  }
  .image {
    width: 100%;
    height: 250px;
    display: block;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .name {
    font-size: 17px;
    color: aqua;
    margin: 10px 0;
    flex: 1;
  }
  .price {
    font-size: 17px;
    color: orange;
  }
  .category {
    font-size: 16px;
    color: gray;
    margin-top: 10px;
  }
`;
