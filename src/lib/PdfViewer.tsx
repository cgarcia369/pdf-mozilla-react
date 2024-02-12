import { MainProps } from "./types/PdfViewer.types.ts";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Content from "./components/Content/Content.tsx";
import PdfViewerProvider from "./context/PdfViewerProvider.tsx";
import "./css/normalize.scss";
import TopNavbar from "./components/TopNavbar/TopNavbar.tsx";
import {
  PdfViewerMainContainer,
  PdfViewerMainContent,
} from "./styles/PdfViewer.styles.ts";
import SideNavbar from "./components/SideNavbar/SideNavbar.tsx";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
type PdfViewerProps = MainProps;

const PdfViewer = ({ ...props }: PdfViewerProps) => {
  return (
    <>
      <PdfViewerProvider {...props}>
        <PdfViewerMainContainer>
          <TopNavbar />
          <PdfViewerMainContent>
            <SideNavbar />
            <Content />
          </PdfViewerMainContent>
        </PdfViewerMainContainer>
      </PdfViewerProvider>
    </>
  );
};

export default PdfViewer;
