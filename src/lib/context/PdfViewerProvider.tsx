import { PropsWithChildren, useMemo, useReducer } from "react";
import {
  initialPdfViewerContext,
  initialPdfViewerState,
} from "../constants/initial/pdfViewer.initial.ts";
import { IHandleOnLoad } from "../types/PdfViewer.types.ts";
import { PdfViewerReducer } from "./PdfViewerReducer.ts";
import { setPdfViewerState } from "./PdfViewerTypes.ts";
import { PdfViewerContext } from "./PdfViewerContext.tsx";

const PdfViewerProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>) => {
  const [state, dispatch] = useReducer(PdfViewerReducer, initialPdfViewerState);
  const handleOnLoad: IHandleOnLoad = ({ pdf }) => {
    dispatch(
      setPdfViewerState({
        url: "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf",
        numPages: pdf.numPages,
      }),
    );
  };
  return (
    <PdfViewerContext.Provider
      value={useMemo(
        () => ({
          ...initialPdfViewerContext,
          state,
          fns: {
            handleOnLoad,
          },
        }),
        [state],
      )}
    >
      {children}
    </PdfViewerContext.Provider>
  );
};

export default PdfViewerProvider;
