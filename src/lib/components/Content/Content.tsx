import { usePdfViewer } from "../../context/PdfViewerHook.ts";
import { DocumentStyles, PageStyles } from "./styles/Content.styles.ts";

const Content = () => {
  const {
    fns: { handleOnLoad },
    state: { document, currentZoom },
    originalProps: { url },
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
              return (
                <PageStyles
                  key={index}
                  pageNumber={index + 1}
                  scale={currentZoom}
                />
              );
            })}
          </>
        )}
      </DocumentStyles>
    </>
  );
};

export default Content;
