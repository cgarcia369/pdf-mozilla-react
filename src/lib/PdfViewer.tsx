import { MainProps } from "./types/PdfViewer.types.ts";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Content from "./components/Content/Content.tsx";
import PdfViewerProvider from "./context/PdfViewerProvider.tsx";
import "./css/normalize.scss";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
type PdfViewerProps = MainProps;

const PdfViewer = ({ url }: PdfViewerProps) => {
  return (
    <>
      <PdfViewerProvider>
        <Content url={url} />
      </PdfViewerProvider>
    </>
  );
};

export default PdfViewer;
