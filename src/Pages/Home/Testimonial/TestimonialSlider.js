import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function TestimonialSlider() {
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
          <div className="card w-4/12 bg-white mx-auto">
            <div className="card-body">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl text-primary font-semibold">
                    Good Jobs
                  </h2>
                  <img
                    src="https://i.ibb.co/rsSnH3Y/inverted-commas-1.png"
                    alt=""
                  />
                </div>
                <p className="mb-10">
                  Without JobHunt i'd be homeless, they found me a job and got
                  me sorted out quickly with everything! Can't quite… The Mitech
                  team works really hard to ensure high level of quality
                </p>
                <div className="flex items-center">
                  <img
                    src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/t3.jpg"
                    alt=""
                  />
                  <div className="ml-3">
                    <h2 className="text-xl font-medium">Brooklyn Simmons</h2>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-4/12 bg-white mx-auto">
            <div className="card-body">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl text-primary font-semibold">
                    Good Jobs
                  </h2>
                  <img
                    src="https://i.ibb.co/rsSnH3Y/inverted-commas-1.png"
                    alt=""
                  />
                </div>
                <p className="mb-10">
                  Without JobHunt i'd be homeless, they found me a job and got
                  me sorted out quickly with everything! Can't quite… The Mitech
                  team works really hard to ensure high level of quality
                </p>
                <div className="flex items-center">
                  <img
                    src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/t3.jpg"
                    alt=""
                  />
                  <div className="ml-3">
                    <h2 className="text-xl font-medium">Brooklyn Simmons</h2>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-4/12 bg-white mx-auto">
            <div className="card-body">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl text-primary font-semibold">
                    Good Jobs
                  </h2>
                  <img
                    src="https://i.ibb.co/rsSnH3Y/inverted-commas-1.png"
                    alt=""
                  />
                </div>
                <p className="mb-10">
                  Without JobHunt i'd be homeless, they found me a job and got
                  me sorted out quickly with everything! Can't quite… The Mitech
                  team works really hard to ensure high level of quality
                </p>
                <div className="flex items-center">
                  <img
                    src="https://apusthemes.com/wp-demo/superio-new/wp-content/uploads/2021/03/t3.jpg"
                    alt=""
                  />
                  <div className="ml-3">
                    <h2 className="text-xl font-medium">Brooklyn Simmons</h2>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
