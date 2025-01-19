"use client";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperSlide = [
  { backgroundUri: "/ipp.jpeg" },
  { backgroundUri: "/factory.jpeg" },
  { backgroundUri: "/re.jpg" },
  { backgroundUri: "/rent.jpg" },
];

function Construction() {
  return (
    <>
      <div className="w-full max-w-[1200px] m-auto">
        <div className="pt-[140px] pb-8 flex items-end justify-between">
          <div>
            <div className="text-4xl font-bold">시공사례</div>
            <div className="text-2xl text-gray-500">Construction case</div>
          </div>
          <div className="flex gap-4">
            <button className="w-[75px] h-[45px] bg-green-900 text-white rounded-lg swiper-button-prev">
              이전
            </button>
            <button className="w-[75px] h-[45px] bg-green-900 text-white rounded-lg swiper-button-next">
              다음
            </button>
          </div>
        </div>
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
              slidesPerView: 2, // 화면 너비가 640px 이상일 때 2개의 슬라이드 표시
              spaceBetween: 5, // 슬라이드 간격 20px
            },
            1024: {
              slidesPerView: 3, // 화면 너비가 1024px 이상일 때 3개의 슬라이드 표시
              spaceBetween: 10, // 슬라이드 간격 30px
            },
          }}
        >
          {swiperSlide.map((swiperslide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[350px] bg-cover rounded-lg"
                style={{ backgroundImage: `url(${swiperslide.backgroundUri})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default Construction;
