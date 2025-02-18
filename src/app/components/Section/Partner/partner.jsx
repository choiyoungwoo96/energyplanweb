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
    <div className="w-screen bg-gray-100 py-[100px] flex flex-col gap-10">
      <div className="w-full max-w-[1200px] m-auto px-4">
        <div className="text-3xl">Partner Company</div>
      </div>
      <div className="flex items-start justify-start  w-screen">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={2000}
          freeMode={true}
          pagination={{ clickable: true }}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
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
