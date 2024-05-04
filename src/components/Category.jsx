import React from "react";

const Category = () => {
  return (
    <>
      <section id="category ">
        <div className="container flex flex-col gap-5 md:flex-row">
          {/* Card-1 */}
          <div className="bg-secondaryColor flex py-3 rounded-xl overflow-hidden md:flex-1 ">
            <div className="basis-1/3 relative">
              <img
                src="../public/burger-1.png"
                alt="burger"
                className="w-28 absolute -bottom-4 -left-4"
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="card__title">Food</h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>
              <a href="#" className="text-blackColor cursor-pointer ">
                Buy Online
              </a>
            </div>
          </div>
          {/* Card-2 */}
          <div className="bg-redColor flex py-3 rounded-xl overflow-hidden md:flex-1 ">
            <div className="basis-1/3 relative">
              <img
                src="../public/snack-1.png"
                alt="burger"
                className="w-28 absolute -bottom-4 -left-4"
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="card__title">Snack</h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>
              <a href="#" className="text-secondaryColor cursor-pointer ">
                Buy Online
              </a>
            </div>
          </div>
          {/* Card-3 */}
          <div className="bg-greenColor flex py-3 rounded-xl overflow-hidden md:flex-1 ">
            <div className="basis-1/3 relative">
              <img
                src="../public/beverage-1.png"
                alt="burger"
                className="w-28 absolute -bottom-4 -left-4"
              />
            </div>
            <div>
              <div className="mb-2">
                <h4 className="card__title">Beverage</h4>
                <p className="text-xs">Lorem ipsum dolor sit.</p>
              </div>
              <a href="#" className="text-secondaryColor cursor-pointer ">
                Buy Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
