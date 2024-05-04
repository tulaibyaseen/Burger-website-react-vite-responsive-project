import React from "react";
import { FaMoon } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { ImSpoonKnife } from "react-icons/im";
import { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [navTabActive, setNavTabActive] = useState("Home");
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleNavTab = (tab) => {
    setNavTabActive(tab);
  };
  return (
    <>
      <header className="bg-primaryColor fixed  top-0 left-0 z-50 w-full md:border-b  dark:bg-darkColor border-secondaryColor ">
        <nav className="container  relative h-14 flex justify-between items-center ">
          <div>
            <a href="#" className="text-2xl uppercase">
              Bur<span className="text-secondaryColor font-oswald">ger</span>
            </a>
          </div>
          <div
            className={`${
              hidden && "hidden"
            } absolute top-0 left-0 w-full py-14 bg-primaryColor   dark:bg-darkColor md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto`}
          >
            <ul className=" flex flex-col text-center gap-5 md:flex-row ">
              <li>
                <a
                  href="#home"
                  className={` hover:text-secondaryColor ease-in duration-200  ${
                    navTabActive === "Home" ? "text-secondaryColor" : ""
                  }  `}
                  onClick={() => handleNavTab("Home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={` hover:text-secondaryColor ease-in duration-200  ${
                    navTabActive === "About" ? "text-secondaryColor" : ""
                  }  `}
                  onClick={() => handleNavTab("About")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className={` hover:text-secondaryColor ease-in duration-200  ${
                    navTabActive === "Menu" ? "text-secondaryColor" : ""
                  }  `}
                  onClick={() => handleNavTab("Menu")}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#review"
                  className={` hover:text-secondaryColor ease-in duration-200  ${
                    navTabActive === "Review" ? "text-secondaryColor" : ""
                  }  `}
                  onClick={() => handleNavTab("Review")}
                >
                  Review
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={` hover:text-secondaryColor ease-in duration-200  ${
                    navTabActive === "Contact" ? "text-secondaryColor" : ""
                  }  `}
                  onClick={() => handleNavTab("Contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="absolute top-3 right-4 cursor-pointer  text-2xl md:hidden">
              <AiOutlineCloseCircle onClick={() => setHidden(!hidden)} />
            </div>
          </div>

          <div className="flex items-center gap-5  ease-in duration-500 ">
            {theme === "dark" ? (
              <MdOutlineLightMode
                className="cursor-pointer text-xl ml-4"
                onClick={handleTheme}
              />
            ) : (
              <FaMoon
                className="cursor-pointer text-xl ml-4"
                onClick={handleTheme}
              />
            )}

            <div>
              <RiMenu2Line
                className="cursor-pointer text-xl md:hidden"
                onClick={() => setHidden(!hidden)}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
