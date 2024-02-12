import {
  ActionButton,
  SelectorStyled,
  Separator,
  ZoomControlsMainContainer,
} from "./styles/ZoomControls.styles.ts";
import { MdAdd, MdHorizontalRule } from "react-icons/md";
import { usePdfViewer } from "../../../../context/PdfViewerHook.ts";
import { PdfViewerConfig } from "../../../../constants/config/pdfViewer.config.ts";
const ZoomControls = () => {
  const {
    fns: { handleChangeZoom },
    state: { currentZoom },
  } = usePdfViewer();

  return (
    <ZoomControlsMainContainer>
      <ActionButton
        onClick={() => {
          handleChangeZoom({ zoom: ({ pastZoom }) => pastZoom + 1 });
        }}
      >
        <MdAdd />
      </ActionButton>
      <Separator />
      <ActionButton
        onClick={() => {
          handleChangeZoom({ zoom: ({ pastZoom }) => pastZoom - 1 });
        }}
      >
        <MdHorizontalRule />
      </ActionButton>
      <SelectorStyled
        onChange={(e) => {
          handleChangeZoom({ zoom: Number(e.target.value) });
        }}
        value={currentZoom}
      >
        {PdfViewerConfig.zoom.availableOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectorStyled>
    </ZoomControlsMainContainer>
  );
};

export default ZoomControls;
