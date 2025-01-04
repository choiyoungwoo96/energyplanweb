"use client";
import { Scrollbar } from "swiper/modules";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";

function Construction() {
  return (
    <>
      <div className="w-[1200px] m-auto">
        <div className="pt-10 pb-3">
          <div>시공사례</div>
          <div>Construction case</div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay
          loop={true}
        >
          <SwiperSlide>
            <div
              className="h-[300px]  bg-cover rounded-lg"
              style={{ backgroundImage: "url(/ipp.jpeg)" }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px]  bg-cover rounded-lg"
              style={{ backgroundImage: "url(/factory.jpeg)" }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px]  bg-cover rounded-lg"
              style={{ backgroundImage: "url(/re.jpg)" }}
            ></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="h-[300px]  bg-cover rounded-lg"
              style={{ backgroundImage: "url(/ipp.jpeg)" }}
            ></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Construction;
