import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/slider1croped.jpeg";
import slide2 from "../assets/slider2.jpeg";
import banner from "../assets/banner.jpg";
function Product() {
  return (
    <>
      <div className="row mt-5 text-center content-header">
        <h3>Our Products</h3>
      </div>
      <div className="row flex mt-4 mb-4">
        <div className="col"></div>
        <div className="col-4">
          <img src={slide1} className="customImg" alt="diabetic atta" />
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <img src={slide2} className="customImg" alt="diabetic smoothie" />
        </div>
        <div className="col"></div>
      </div>

      <Carousel>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </Carousel>
    </>
  );
}

export default Product;
