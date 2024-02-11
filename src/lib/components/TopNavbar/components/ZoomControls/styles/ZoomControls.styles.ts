import styled from "styled-components";
export const ZoomControlsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0;
  column-gap: 10px;
`;
export const ActionButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none !important;
  border: none !important;
  margin: auto 0;
`;
export const Separator = styled.div`
  height: 20px;
  margin: auto 0;
  width: 1px;
  background-color: #e0e0e0;
`;
export const SelectorStyled = styled.select`
  //remove default styles
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  width: 160px;
  height: 30px;
  padding: 0 10px;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;
