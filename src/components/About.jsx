import React from "react";
import { FaCheck } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container flex flex-col gap-10 md:flex-row">
          <div className="flex-1 ">
            <img src="../public/about.jpg" className="rounded-xl" alt="about" />
          </div>
          <div className="flex-1 ">
            <h2 className=" section__title">
              Find food and drinks, all-in-one place for your best taste.
            </h2>
            <div className="seprator"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nostrum excepturi quos commodi voluptatem velit
              modi, repudiandae fugiat blanditiis ex maxime, iste et nam.
            </p>
            <ul className="grid grid-cols-2 py-5  space-y-1  ">
              <li className="text-xs text-paragraphColor flex gap-1 ">
                <FaCheck className="text- text-secondaryColor" />
                Best Price
              </li>
              <li className="text-xs text-paragraphColor flex gap-1">
                <FaCheck className="text- text-secondaryColor" />
                Fresh Ingrediants
              </li>
              <li className="text-xs text-paragraphColor flex gap-1">
                <FaCheck className="text- text-secondaryColor" />
                Best Services
              </li>
              <li className="text-xs text-paragraphColor flex gap-1">
                <FaCheck className="text- text-secondaryColor" />
                Health Protocol
              </li>
            </ul>
            <a href="#" className="btn btn-primary">
              About us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
