import styled from "styled-components";

export const SItem = styled.div`
  display: flex;
  .item-left {
    display: flex;
    align-items: center;
    .image {
      img {
        min-width: 100px;
        max-width: 100px;
        height: 100px;
        object-fit: contain;
      }
    }
    .info {
      margin-left: 10px;
      .name {
        color: aqua;
      }
      .description {
        margin: 5px 0;
        color: gray;
        max-width: 500px;
        min-width: 500px;
      }
    }
  }
  .item-right {
    display: flex;
    align-items: center;
    flex-direction: column;

    .button-add {
      width: 60%;
      border: none;
      background-color: violet;
      color: white;
      cursor: pointer;
      border-radius: 5px;
      padding: 10px 10px;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
`;
