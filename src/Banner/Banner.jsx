import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Banner = () => {
  return (
    <div>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              src={
                "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="banner_1"
              className="w-[100%] md:h-[80vh] h-[50vh]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={
                "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="banner_3"
              className="w-[100%] md:h-[80vh] h-[50vh]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Banner;