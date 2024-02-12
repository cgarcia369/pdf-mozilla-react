import { PropsWithChildren, useCallback, useMemo, useReducer } from "react";
import {
  initialPdfViewerContext,
  initialPdfViewerState,
  initialProps,
} from "../constants/initial/pdfViewer.initial.ts";
import {
  IHandleChangeZoom,
  IHandleOnLoad,
  MainProps,
} from "../types/PdfViewer.types.ts";
import { PdfViewerReducer } from "./PdfViewerReducer.ts";
import { changePdfZoom, setPdfViewerState } from "./PdfViewerTypes.ts";
import { PdfViewerContext } from "./PdfViewerContext.tsx";

const PdfViewerProvider = ({
  children,
  ...originalProps
}: PropsWithChildren<MainProps>) => {
  originalProps = Object.assign({}, initialProps, originalProps);
  const [state, dispatch] = useReducer(PdfViewerReducer, initialPdfViewerState);
  const handleOnLoad: IHandleOnLoad = ({ pdf }) => {
    dispatch(
      setPdfViewerState({
        url: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
        numPages: pdf.numPages,
      }),
    );
  };
  const handleChangeZoom: IHandleChangeZoom = useCallback(
    ({ zoom }) => {
      const { minZoom, maxZoom } = originalProps;
      const zoomIsFn = typeof zoom === "function";
      if (!minZoom || !maxZoom) return;
      if (!zoomIsFn) {
        if (zoom === state.currentZoom || zoom < minZoom || zoom > maxZoom)
          return;
        dispatch(changePdfZoom(zoom));
        return;
      }
      const newZoom = zoom({ pastZoom: state.currentZoom });
      if (
        newZoom === state.currentZoom ||
        newZoom < minZoom ||
        newZoom > maxZoom
      )
        return;
      dispatch(changePdfZoom(newZoom));
    },
    [state.currentZoom],
  );

  return (
    <PdfViewerContext.Provider
      value={useMemo(
        () => ({
          ...initialPdfViewerContext,
          state,
          fns: {
            handleOnLoad,
            handleChangeZoom,
          },
          originalProps,
        }),
        [state],
      )}
    >
      {children}
    </PdfViewerContext.Provider>
  );
};

export default PdfViewerProvider;
