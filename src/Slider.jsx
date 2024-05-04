import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/autoplay";
const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      speed={400}
      loop={true}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      // navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="swiper "
    >
      <SwiperSlide>
        <li className="swiper-slide  ">
          <div className="flex flex-col gap-5 bg-primaryColor rounded-xl py-6">
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis numquam quos obcaecati. Minus voluptatibus sequi rerum
              rem?
            </p>
            <div className="flex items-center">
              <img
                src="../public/review-1.jpg"
                className="w-12 h-12 rounded-full"
                alt="review"
              />
              <div className="ml-2">
                <p className="uppercase font-oswald">Jhon Doe </p>
                <p className="paragraph">Designer</p>
              </div>
              <FaQuoteRight className="text-secondaryColor text-4xl ml-auto pr-2" />
            </div>
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="swiper-slide">
          <div className="flex flex-col gap-5 bg-primaryColor rounded-xl py-6">
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis numquam quos obcaecati. Minus voluptatibus sequi rerum
              rem?
            </p>
            <div className="flex items-center">
              <img
                src="../public/review-2.jpg"
                className="w-12 h-12 rounded-full"
                alt="review"
              />
              <div className="ml-2">
                <p className="uppercase font-oswald">Jhon Doe </p>
                <p className="paragraph">Designer</p>
              </div>
              <FaQuoteRight className="text-secondaryColor text-4xl ml-auto pr-2" />
            </div>
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="swiper-slide">
          <div className="flex flex-col gap-5 bg-primaryColor rounded-xl py-6">
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis numquam quos obcaecati. Minus voluptatibus sequi rerum
              rem?
            </p>
            <div className="flex items-center">
              <img
                src="../public/review-3.jpg"
                className="w-12 h-12 rounded-full"
                alt="review"
              />
              <div className="ml-2">
                <p className="uppercase font-oswald">Jhon Doe </p>
                <p className="paragraph">Designer</p>
              </div>
              <FaQuoteRight className="text-secondaryColor text-4xl ml-auto pr-2" />
            </div>
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="swiper-slide">
          <div className="flex flex-col gap-5 bg-primaryColor rounded-xl py-6">
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis numquam quos obcaecati. Minus voluptatibus sequi rerum
              rem?
            </p>
            <div className="flex items-center">
              <img
                src="../public/review-4.jpg"
                className="w-12 h-12 rounded-full"
                alt="review"
              />
              <div className="ml-2">
                <p className="uppercase font-oswald">Jhon Doe </p>
                <p className="paragraph">Designer</p>
              </div>
              <FaQuoteRight className="text-secondaryColor text-4xl ml-auto pr-2" />
            </div>
          </div>
        </li>
      </SwiperSlide>
      <SwiperSlide>
        <li className="swiper-slide">
          <div className="flex flex-col gap-5 bg-primaryColor rounded-xl py-6">
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis numquam quos obcaecati. Minus voluptatibus sequi rerum
              rem?
            </p>
            <div className="flex items-center">
              <img
                src="../public/review-5.jpg"
                className="w-12 h-12 rounded-full"
                alt="review"
              />
              <div className="ml-2">
                <p className="uppercase font-oswald">Jhon Doe </p>
                <p className="paragraph">Designer</p>
              </div>
              <FaQuoteRight className="text-secondaryColor text-4xl ml-auto pr-2" />
            </div>
          </div>
        </li>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider;
