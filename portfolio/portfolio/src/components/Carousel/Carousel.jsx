import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./images/img.jsx"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Carousel/Carousel.css"
function CarouselEffect() {
  return (
    <div className="carousel-wraper">
      <h1 className="h11">Highlighting my work</h1>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        transitionTime={600}
      >
        {img.map((ImageItemLink) => {
          return <img src={ImageItemLink} />;
        })}
      </Carousel>
    </div>
  );
}

export default CarouselEffect;