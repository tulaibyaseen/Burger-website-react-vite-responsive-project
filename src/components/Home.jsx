import React from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaEnvira } from "react-icons/fa";

import { PiForkKnifeFill } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container flex flex-col items-center  gap-10 md:flex-row ">
          <div className="mx-auto  md:basis-1/2 lg:basis-2/5">
            <img
              src="../public/home-image.png   "
              className="w-60 md:w-full  animate-movingY home__image"
              alt="burger"
            />
          </div>
          <div className="text-center md:basis-1/2 md:text-start  lg:basis-3/5 ">
            <h1 className="home__title md:text-start">
              HAPPY TUMMY WITH TASTY BURGERS.
            </h1>
            <div className="seprator mx-auto md:mx-0"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum,libero magni? Fugiat perspiciatis eius, sequi aliquid
              ullam dolorem temporibus voluptate corrupti fugit saepe sunt unde
              culpa? Tenetur quos quod laudantium.
            </p>
            <div className="text-base flex items-center justify-center py-10 gap-4 md:justify-start md:gap-20">
              <div className="text-center">
                <PiForkKnifeFill className="text-secondaryColor text-4xl" />
                <br />
                Delicious
              </div>
              <div className="text-center">
                <MdOutlineWaterDrop className="text-secondaryColor text-4xl" />
                <br />
                Fresh
              </div>
              <div className="text-center ">
                <FaEnvira className="text-secondaryColor text-4xl" />
                <br />
                Organic
              </div>
            </div>
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
