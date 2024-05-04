import React from "react";
import Slider from "../Slider";
const Review = () => {
  return (
    <>
      <section id="review" className="bg-primaryColorLight py-20">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <h2 className="section__title">customer review</h2>
            <div className="seprator mx-auto"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto facere corrupti porro accusamus. Accusantium, odit.
            </p>
          </div>
          <div className="swiper py-10">
            <ul className="swiper-wrapper border-none">
              <Slider />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
