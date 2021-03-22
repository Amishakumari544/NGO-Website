import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Third slide"
          />
 </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
