"use client";
import Slideitem from "./construction.json";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function ConstructionSwiperSilde() {
  return <div></div>;
}

function ConstructionSwiper() {
  return (
    <div>
      <Swiper
        modules={[Autoplay, Scrollbar, Navigation, Pagination, FreeMode]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        loop={true}
        observer={true}
        observeParents={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {/* <ConstructionSwiperSilde></ConstructionSwiperSilde>
         */}
        {Slideitem.map((slideitem, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[350px] bg-cover rounded-2xl"
              style={{ backgroundImage: `url(${slideitem.backgroundUri})` }}
            ></div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold py-[5px]">
                {slideitem.address}
              </div>
              <div className="text-sm font-thin">{slideitem.date}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ConstructionSwiper;
