import React from "react";

const Promo = () => {
  return (
    <>
      <section id="promo">
        <div className="container flex flex-col gap-5 lg:flex-row lg:gap-10">
          {/* card-1 */}
          <div className="bg-primaryColorLight flex flex-col rounded-xl p-5 md:flex-row md:items-center lg:flex-row-reverse">
            <img
              src="../public/promo-1.png"
              className="w-40 mx-auto  hover:animate-movingY md:mx-5"
              alt="promo"
            />
            <div className="space-y-5 pt-5 md:pt-0">
              <p className="text-xs text-secondaryColor">Payday Promo</p>
              <h3 className="uppercase card__title">
                Get A 10% Discount On payday week
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <a href="#" className="text-xs text-secondaryColor">
                Buy Online
              </a>
            </div>
          </div>
          {/* card-2 */}
          <div className="bg-primaryColorLight flex flex-col rounded-xl p-5 md:flex-row md:items-center lg:flex-row-reverse ">
            <img
              src="../public/promo-2.png "
              className="w-40 mx-auto  hover:animate-movingY md:mx-5"
              alt="promo"
            />
            <div className="space-y-5 pt-5 md:pt-0">
              <p className="text-xs text-secondaryColor">Payday Promo</p>
              <h3 className="uppercase card__title">
                Get A 10% Discount On payday week
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <a href="#" className="text-xs text-secondaryColor">
                Buy Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Promo;
