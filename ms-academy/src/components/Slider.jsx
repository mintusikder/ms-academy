import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import slide1 from "../assets/Screenshot_1.png";
// import slide2 from "../assets/Screenshot_2.png";
// import slide3 from "../assets/Screenshot_3.png";

const Slider = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-full flex justify-center">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        className="rounded-2xl overflow-hidden"
      >
        {[slide1].map((img, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full rounded-2xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
