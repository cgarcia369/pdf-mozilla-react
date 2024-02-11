import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";

export type MainProps = {
  url: string;
};
export type IPdfViewerContext = {
  state: IPdfViewerState;
  fns: {
    handleOnLoad: IHandleOnLoad;
  };
};
export type IPdfDoc = {
  numPages: number;
  url: string;
};
export type IPdfViewerState = {
  document: IPdfDoc | null;
};
export type IHandleOnLoad = ({ pdf }: { pdf: PDFDocumentProxy }) => void;
