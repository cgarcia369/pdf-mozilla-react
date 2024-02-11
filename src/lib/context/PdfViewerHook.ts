import { useContext } from "react";
import { PdfViewerContext } from "./PdfViewerContext.tsx";

export const usePdfViewer = () => useContext(PdfViewerContext);
