import { createContext } from "react";
import { IPdfViewerContext } from "../types/PdfViewer.types.ts";
import { initialPdfViewerContext } from "../constants/initial/pdfViewer.initial.ts";

export const PdfViewerContext = createContext<IPdfViewerContext>(
  initialPdfViewerContext,
);
