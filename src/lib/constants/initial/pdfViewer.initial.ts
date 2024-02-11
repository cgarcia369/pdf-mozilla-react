import {
  IPdfViewerContext,
  IPdfViewerState,
} from "../../types/PdfViewer.types.ts";

export const initialPdfViewerState: IPdfViewerState = {
  document: null,
  currentZoom: 1,
};
export const initialPdfViewerContext: IPdfViewerContext = {
  state: initialPdfViewerState,
  fns: {
    handleOnLoad: () => {},
    handleChangeZoom: () => {},
  },
};
