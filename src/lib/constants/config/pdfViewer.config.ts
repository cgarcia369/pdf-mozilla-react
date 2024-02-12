export const PdfViewerConfig = {
  color: {
    content: {
      base: "rgb(42 42 46)",
    },
    topNavbar: {
      base: "#38383D",
    },
    // backgroundDocument: "rgb(42 42 46)",
    // topNavbar: "#38383D",
  },
  measurement: {
    sideNavbar: {
      baseWidth: 250,
    },
    topNavbar: {
      baseHeight: 50,
    },
  },
  zoom: {
    availableOptions: [
      {
        value: "0.5",
        label: "50%",
      },
      {
        value: "0.75",
        label: "75%",
      },
      {
        value: "1",
        label: "100%",
      },
      {
        value: "1.25",
        label: "125%",
      },
      {
        value: "1.5",
        label: "150%",
      },
      {
        value: "2",
        label: "200%",
      },
      {
        value: "3",
        label: "300%",
      },
      {
        value: "4",
        label: "400%",
      },
    ],
  },
};
