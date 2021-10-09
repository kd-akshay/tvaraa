/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function PdfViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(
    props.pageStart ? props.pageStart : 1
  );

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const traversePage = (type) => {
    if (type === "prev" && pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    } else if (type === "nxt" && pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div className="pdfContainer text-center">
      <Document
        file={props.fileToBeDisplay}
        onLoadSuccess={onDocumentLoadSuccess}
        className=""
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        <input
          type="button"
          value="<"
          onClick={() => traversePage("prev")}
          className="btn btn-link"
        />
        &emsp; Page {pageNumber} of {numPages}&emsp;
        <input
          type="button"
          value=">"
          onClick={() => traversePage("nxt")}
          className="btn btn-link"
        />
      </p>
    </div>
  );
}

export default PdfViewer;
