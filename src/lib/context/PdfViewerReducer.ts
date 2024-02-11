import { createReducer } from "@reduxjs/toolkit";
import { initialPdfViewerState } from "../constants/initial/pdfViewer.initial.ts";
import { setPdfViewerState } from "./PdfViewerTypes.ts";

export const PdfViewerReducer = createReducer(
  initialPdfViewerState,
  (builder) => {
    builder.addCase(setPdfViewerState, (state, action) => {
      state.document = action.payload;
    });
  },
);
