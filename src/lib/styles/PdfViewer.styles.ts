import styled from "styled-components";
import { PdfViewerConfig } from "../constants/config/pdfViewer.config.ts";
export const PdfViewerMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
export const PdfViewerMainContent = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - ${PdfViewerConfig.measurement.topNavbar.baseHeight}px);
  width: 100%;
`;
