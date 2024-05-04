import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer relative">
          <div className="container">
            <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
              <li>
                <div className="space-y-3">
                  <a href="" className="text-4xl font-oswald uppercase">
                    Bur<span className="text-secondaryColor">ger</span>
                  </a>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nam, sit! Quod corporis beatae itaque consequatur rem quos
                    voluptate?
                  </p>
                </div>
              </li>
              <li>
                <div className="flex flex-col gap-3">
                  <h3 className="font-oswald text-lg uppercase">support</h3>
                  <a href="#" className="text-xs hover:text-secondaryColor">
                    FAQ's
                  </a>
                  <a href="#" className="text-xs hover:text-secondaryColor">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-xs hover:text-secondaryColor">
                    Term & Condition
                  </a>
                  <a href="#" className="text-xs hover:text-secondaryColor">
                    Contact
                  </a>
                </div>
              </li>
              <li className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg uppercase font-oswald">phone</h3>
                  <p className="flex items-center gap-2 text-xs">
                    <FaPhone className="text-secondaryColor text-xl" />
                    +99 3067340659
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg uppercase font-oswald">email</h3>
                  <p className="flex items-center gap-2 text-xs">
                    <MdOutlineAttachEmail className="text-xl text-secondaryColor" />
                    tulaiby@gmail.com
                  </p>
                </div>
              </li>
              <li className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-lg uppercase font-oswald">address</h3>
                  <p className="flex items-center gap-2 text-xs">
                    <CiLocationOn className="text-xl text-secondaryColor" />
                    New Sadiq Colony BWP
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg uppercase font-oswald">follow us</h3>
                  <div className="space-x-3 flex text-xl">
                    <FaFacebook className=" text-secondaryColor  cursor-pointer hover:-translate-y-1 ease-in duration-300" />
                    <FaTwitter className=" text-secondaryColor cursor-pointer hover:-translate-y-1 ease-in duration-300" />
                    <FaInstagram className=" text-secondaryColor cursor-pointer hover:-translate-y-1 ease-in duration-300" />
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex flex-col items-center border-t border-primaryColorLight py-5 md:flex-row md:justify-between">
              <p className="paragraph"> Burger Template kit by Light Code</p>
              <p className="paragraph">
                Copyright @ 2024. All rights reserved{" "}
              </p>
            </div>
          </div>
          <a
            href="#"
            className={`  absolute   bottom-4 right-4  animate-movingY bg-secondaryColor    shadow-sm  inline-block items-center justify-center px-2 py-2 md:px-4 md:py-4 rounded-full text-xl text-blackColor z-50      hover:-translate-y-1 ease-in duration-200`}
          >
            <FaArrowUp />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
