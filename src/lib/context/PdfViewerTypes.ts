import { createAction } from "@reduxjs/toolkit";
import { IPdfDoc } from "../types/PdfViewer.types.ts";

export const setPdfViewerState = createAction<IPdfDoc>(
  "pdfViewer/setPdfViewerState",
);
