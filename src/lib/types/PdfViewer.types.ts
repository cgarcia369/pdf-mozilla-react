import { PDFDocumentProxy } from "pdfjs-dist/types/src/display/api";

export type MainProps = {
  url: string;
};
export type IPdfViewerContext = {
  state: IPdfViewerState;
  fns: {
    handleOnLoad: IHandleOnLoad;
    handleChangeZoom: IHandleChangeZoom;
  };
  originalProps: MainProps;
};
export type IPdfDoc = {
  numPages: number;
  url: string;
};
export type IPdfViewerState = {
  document: IPdfDoc | null;
  currentZoom: number;
};

//fns
export type IHandleOnLoad = ({ pdf }: { pdf: PDFDocumentProxy }) => void;
export type IHandleChangeZoom = ({
  zoom,
}: {
  zoom: number | (({ pastZoom }: { pastZoom: number }) => number);
}) => void;
