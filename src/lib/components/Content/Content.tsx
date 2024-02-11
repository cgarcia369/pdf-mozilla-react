import { MainProps } from "../../types/PdfViewer.types.ts";
import { usePdfViewer } from "../../context/PdfViewerHook.ts";
import { DocumentStyles, PageStyles } from "./styles/Content.styles.ts";

type ContentProps = Pick<MainProps, "url">;

const Content = ({ url }: ContentProps) => {
  const {
    fns: { handleOnLoad },
    state: { document },
  } = usePdfViewer();
  return (
    <>
      <DocumentStyles
        file={url}
        onLoadSuccess={(document) => {
          handleOnLoad({ pdf: document });
        }}
        renderMode={"canvas"}
      >
        {document && (
          <>
            {Array.from({ length: document.numPages }).map((_, index) => {
              return <PageStyles key={index} pageNumber={index + 1} />;
            })}
          </>
        )}
      </DocumentStyles>
    </>
  );
};

export default Content;
