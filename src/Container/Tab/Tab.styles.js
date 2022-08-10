import styled from "styled-components";
export const TabWrapper = styled.div`
  padding: 40px 15px;
`;
export const TabHeader = styled.ul`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;
export const TabItem = styled.li`
  color: #b1b1b1;
  transition: all 0.3s;
  cursor: pointer !important;
  text-transform: capitalize;
  font-size: 18px;
  &.active {
    color: #fff;
  }
`;
export const TabContent = styled.div``;
export const TabContentData = styled.div``;
