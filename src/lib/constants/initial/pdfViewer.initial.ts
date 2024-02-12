import {
  IPdfViewerContext,
  IPdfViewerState,
  MainProps,
} from "../../types/PdfViewer.types.ts";

export const initialPdfViewerState: IPdfViewerState = {
  document: null,
  currentZoom: 1,
};
export const initialProps: MainProps = {
  url: "",
};
export const initialPdfViewerContext: IPdfViewerContext = {
  state: initialPdfViewerState,
  fns: {
    handleOnLoad: () => {},
    handleChangeZoom: () => {},
  },
  originalProps: initialProps,
};
