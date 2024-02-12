import { PdfViewerConfig } from "../../../../../constants/config/pdfViewer.config.ts";

export const getNextOrPreviousZoom = ({
  currentZoom,
  direction,
  config = PdfViewerConfig.zoom.availableOptions,
}: {
  currentZoom: number;
  direction: "next" | "previous";
  config?: (typeof PdfViewerConfig)["zoom"]["availableOptions"];
}) => {
  if (direction === "next") {
    let founded;
    let diff;
    for (const item of config) {
      const newDiff = Number(item.value) - currentZoom;
    }
  }
};
