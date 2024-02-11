import styled from "styled-components";
import { Document } from "react-pdf";

import { Page } from "react-pdf";
export const DocumentStyles = styled(Document)`
  background: red;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  //padding: 10px;
`;
export const PageStyles = styled(Page)`
  width: fit-content;
  margin: 10px auto;
`;
