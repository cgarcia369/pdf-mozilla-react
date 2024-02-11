import {
  ActionButton,
  SelectorStyled,
  Separator,
  ZoomControlsMainContainer,
} from "./styles/ZoomControls.styles.ts";
import { MdAdd, MdHorizontalRule } from "react-icons/md";
import { usePdfViewer } from "../../../../context/PdfViewerHook.ts";
const ZoomControls = () => {
  const {
    fns: { handleChangeZoom },
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
      >
        <option value="1">100%</option>
        <option value="2">200%</option>
        <option value="3">300%</option>
        <option value="4">400%</option>
      </SelectorStyled>
    </ZoomControlsMainContainer>
  );
};

export default ZoomControls;
