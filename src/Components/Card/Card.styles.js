import styled from "styled-components";
export const CardWrapper = styled.div``;
export const Cards = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  h2 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    margin: 0 0 20px;
    padding: 0;
    li {
      font-size: 18px;
      line-height: 48px;
    }
  }
  .btn {
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #000;
    font-size: 14px;
    padding: 0 25px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer !important;
  }
`;
