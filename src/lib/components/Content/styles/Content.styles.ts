import styled from "styled-components";
import { Document } from "react-pdf";

import { Page } from "react-pdf";
import { PdfViewerConfig } from "../../../constants/config/pdfViewer.config.ts";
export const DocumentStyles = styled(Document)`
  background: ${PdfViewerConfig.color.content.base};
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  width: calc(100% - ${PdfViewerConfig.measurement.sideNavbar.baseWidth}px);
  margin: 0 auto;
  overflow-y: auto;
  height: 100%;
  //padding: 10px;
`;
export const PageStyles = styled(Page)`
  width: fit-content;
  margin: 1px auto -8px;
  border: 9px solid transparent;
  background-clip: content-box;
`;
