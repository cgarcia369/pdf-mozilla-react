import PdfViewer from "./lib/PdfViewer.tsx";

function App() {
  return (
    <PdfViewer
      url={
        "https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"
      }
    />
  );
}

export default App;
