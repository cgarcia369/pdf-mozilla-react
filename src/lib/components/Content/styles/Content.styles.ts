import styled from "styled-components";
import { Document } from "react-pdf";

import { Page } from "react-pdf";
import { PdfViewerConfig } from "../../../constants/config/pdfViewer.config.ts";
export const DocumentStyles = styled(Document)`
  background: ${PdfViewerConfig.color.backgroundDocument};
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  width: calc(100% - ${PdfViewerConfig.measurement.sideNavbarWidth}px);
  margin: 0 auto;
  //padding: 10px;
`;
export const PageStyles = styled(Page)`
  width: fit-content;
  margin: 10px auto;
`;
