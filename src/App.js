import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header.component";
import Product from "./component/product.component";
import Vision from "./component/vision.component";
import PdfViewer from "./component/pdfviewer.component";

import DiabeticPdf from "./assets/DiabeticAtta.pdf";
import DiabeticAttaDetail from "./assets/DiabeticAttaDetail.pdf";

import licence from "./assets/license.pdf";

import Tvara from "./assets/TVARAA-9001.pdf";
function App() {
  return (
    <div className="App">
      <div className="container-fluid noPadding">
        <Header />
        <Vision />
        <Product />
        <div className="row lastDiv">
          <div className="row mt-5 text-center content-header">
            <h3>Certificates & Content</h3>
          </div>
          <div className="col">
            <PdfViewer fileToBeDisplay={DiabeticPdf} pageStart={1}></PdfViewer>
          </div>
          <div className="col">
            <PdfViewer fileToBeDisplay={licence} pageStart={1}></PdfViewer>
          </div>
          <div className="col">
            <PdfViewer fileToBeDisplay={Tvara} pageStart={1}></PdfViewer>
          </div>
          <div className="col">
            <PdfViewer
              fileToBeDisplay={DiabeticAttaDetail}
              pageStart={2}
            ></PdfViewer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
