import { createReducer } from "@reduxjs/toolkit";
import { initialPdfViewerState } from "../constants/initial/pdfViewer.initial.ts";
import { changePdfZoom, setPdfViewerState } from "./PdfViewerTypes.ts";

export const PdfViewerReducer = createReducer(
  initialPdfViewerState,
  (builder) => {
    builder.addCase(setPdfViewerState, (state, action) => {
      state.document = action.payload;
    });
    builder.addCase(changePdfZoom, (state, action) => {
      state.currentZoom = action.payload;
    });
  },
);
