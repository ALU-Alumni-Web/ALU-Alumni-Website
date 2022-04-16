import React, { useState } from "react";
import classes from "./Slider.module.scss";
import { SliderData } from "./SliderData";
import "./Slider.module.scss";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className={classes.slider}>
      <FaArrowAltCircleRight
        className={classes.right_arrow}
        onClick={nextSlide}
      />
      <FaArrowAltCircleLeft
        className={classes.left_arrow}
        onClick={prevSlide}
      />
      {SliderData.map((slides, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slides.imgage}
                alt="Stories highlights"
                className={classes.images}
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
