import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="font-Jost lg:p-10 py-16 lg:py-10">
            <div className="avatar flex items-end justify-center mb-5">
              <div className="w-24 rounded-full ring-1 bg-white ring-offset-8 ring-gray-600">
                <img
                  src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/t5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h1 className="text-[#1967D2] text-[18px] leading-6 font-semibold pt-5">
                Great Quality!
              </h1>
              <p className="text-[#696969] lg:px-10 px-3 leading-7 font-semibold">
                Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality
              </p>

              <h1 className="text-[#3B3C3F] pt-7 text-[18px] leading-6 font-semibold">
                Brooklyn Simmons
              </h1>
              <p className="capitalize text-[#696969]">Web developer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="font-Jost lg:p-10 py-16 lg:py-10">
            <div className="avatar flex items-end justify-center mb-5">
              <div className="w-24 rounded-full ring-1 bg-white ring-offset-8 ring-gray-600">
                <img
                  src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/t5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h1 className="text-[#1967D2] text-[18px] leading-6 font-semibold pt-5">
                Great Quality!
              </h1>
              <p className="text-[#696969] lg:px-10 px-3 leading-7 font-semibold">
                Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality
              </p>

              <h1 className="text-[#3B3C3F] pt-7 text-[18px] leading-6 font-semibold">
                Brooklyn Simmons
              </h1>
              <p className="capitalize text-[#696969]">Web developer</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="font-Jost lg:p-10 py-16 lg:py-10">
            <div className="avatar flex items-end justify-center mb-5">
              <div className="w-24 rounded-full ring-1 bg-white ring-offset-8 ring-gray-600">
                <img
                  src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/t5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h1 className="text-[#1967D2] text-[18px] leading-6 font-semibold pt-5">
                Great Quality!
              </h1>
              <p className="text-[#696969] lg:px-10 px-3 leading-7 font-semibold">
                Without JobHunt i’d be homeless, they found me a job and got me
                sorted out quickly with everything! Can’t quite… The Mitech team
                works really hard to ensure high level of quality
              </p>

              <h1 className="text-[#3B3C3F] pt-7 text-[18px] leading-6 font-semibold">
                Brooklyn Simmons
              </h1>
              <p className="capitalize text-[#696969]">Web developer</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
