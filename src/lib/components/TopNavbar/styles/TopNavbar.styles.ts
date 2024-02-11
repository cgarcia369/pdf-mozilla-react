import styled from "styled-components";
import { PdfViewerConfig } from "../../../constants/config/pdfViewer.config.ts";
export const TopNavbarMainContainer = styled.div`
  height: ${PdfViewerConfig.measurement.topNavbar.baseHeight}px;
  min-height: ${PdfViewerConfig.measurement.topNavbar.baseHeight}px;
  background: ${PdfViewerConfig.color.topNavbar.base};
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
