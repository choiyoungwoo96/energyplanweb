"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Partner() {
  //   const partnerCompany = [
  //     {
  //       src: "/company01",
  //     },
  //     {
  //       src: "/company01",
  //     },
  //     {
  //       src: "/company01",
  //     },
  //     {
  //       src: "/company01",
  //     },
  //     {
  //       src: "/company01",
  //     },
  //   ];
  return (
    <div className="w-screen m-auto bg-gray-100 my-[100px] py-[100px]">
      <div className="w-full max-w-[1200px] m-auto">
        <div className="text-3xl">Partner Company</div>
      </div>
      <div className="flex items-start justify-start gap-4 w-screen mt-[25px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000}
          freeMode={true}
          pagination={{ clickable: true }}
          slidesPerView={5}
          spaceBetween={30}
        >
          <SwiperSlide>
            <div className="w-full h-[120px] bg-white rounded-lg border border-green-900"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[120px] bg-white rounded-lg border border-green-900"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[120px] bg-white rounded-lg border border-green-900"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[120px] bg-white rounded-lg border border-green-900"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[120px] bg-white rounded-lg border border-green-900"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[120px] bg-white rounded-lg border border-green-900"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[120px] bg-white rounded-lg border border-green-900"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Partner;