import React from "react";
import { FaRegPaperPlane } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-secondaryColor py-16">
        <div className="container  flex flex-col gap-5 md:flex-row md:items-center ">
          <div className="space-y-4 md:flex-1">
            <h2 className="section__title text-blackColor">
              get exclusive update
            </h2>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:flex-1">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 text-blackColor rounded-l outline-none md:w-full"
            />
            <a
              href="#"
              className="flex items-center justify-center gap-2 btn bg-blackColor hover:bg-greenColor hover:opacity-75"
            >
              <FaRegPaperPlane />
              Subscribe
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
