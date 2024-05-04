import React from "react";
import { useEffect, useState } from "react";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("All");
  const handleActive = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section id="menu">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            <h2 className="section__title"> our Best menu</h2>
            <div className="seprator mx-auto"></div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto facere corrupti porro accusamus. Accusantium, odit.
            </p>
            <div className="tabs_wrap">
              <ul className="flex flex-wrap justify-center gap-3 py-10">
                <li
                  className={`btn bg-primaryColorLight ${
                    activeTab === "All" ? "active" : ""
                  } `}
                  onClick={() => handleActive("All")}
                >
                  All{" "}
                </li>
                <li
                  className={`btn bg-primaryColorLight ${
                    activeTab === "Food" ? "active" : ""
                  } `}
                  onClick={() => handleActive("Food")}
                >
                  Food
                </li>
                <li
                  className={`btn bg-primaryColorLight ${
                    activeTab === "Snack" ? "active" : ""
                  } `}
                  onClick={() => handleActive("Snack")}
                >
                  Snack
                </li>
                <li
                  className={`btn bg-primaryColorLight ${
                    activeTab === "Beverage" ? "active" : ""
                  } `}
                  onClick={() => handleActive("Beverage")}
                >
                  Beverage
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {/* Food */}
              {activeTab === "All" || activeTab === "Food" ? (
                <>
                  {" "}
                  <li className="item_wrap food">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/burger-1.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">regular beef burger</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap food">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/burger-2.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">regular beef burger</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap food">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/burger-3.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">regular beef burger</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap food">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/burger-4.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">regular beef burger</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap food">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/burger-5.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">regular beef burger</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>{" "}
                </>
              ) : null}
              {/* Snack */}
              {activeTab === "All" || activeTab === "Snack" ? (
                <>
                  {" "}
                  <li className="item_wrap snack">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/snack-1.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">french Fries</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap snack">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/snack-2.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">french Fries</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap snack">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/snack-3.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">french Fries</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap snack">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/snack-4.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">french Fries</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap snack">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/snack-5.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">french Fries</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap snack">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/snack-6.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">french Fries</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                </>
              ) : null}
              {/* Beverage */}
              {activeTab === "All" || activeTab === "Beverage" ? (
                <>
                  {" "}
                  <li className="item_wrap beverage">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/beverage-1.png"
                        alt="food"
                        className="w-36 hover:scale-110 ease-linear duration-200 md:w-32 lg:w-20"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">sweet Smoothie</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap beverage">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/beverage-2.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">sweet Smoothie</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap beverage">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/beverage-3.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">sweet Smoothie</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap beverage">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/beverage-4.png"
                        alt="food"
                        className="w-32 hover:scale-110 ease-linear duration-200 md:w-36 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">sweet Smoothie</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                  <li className="item_wrap beverage">
                    <div className="h-56 grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                      <img
                        src="../public/beverage-5.png"
                        alt="food"
                        className="w-40 hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                      />
                    </div>
                    <div className="pt-5">
                      <div className="mb-2">
                        <h4 className="card__title">sweet Smoothie</h4>
                        <p className="paragraph">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                      <p className="text-secondaryColor">$42.00</p>
                    </div>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
