"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

function MainVideo() {
  return (
    <div className="relative">
      <video className="w-screen h-screen object-cover" autoPlay muted loop>
        <source src="/mainvideo.mp4" type="video/mp4"></source>
      </video>
      <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0"></div>
      <div className="w-full  h-full absolute top-0 left-0 flex items-center justify-center">
        <div className="w-[1200px] h-full pb-[35px] flex flex-col gap-2 items-start justify-end">
          <div className="text-5xl text-white font-bold">
            당신의 일상에 태양을 더하다
          </div>
          <div className="text-3xl text-white font-extralight">
            신뢰할수 있는 태양광전문 기업, 에너지플랜
          </div>
          <div className="text-lg text-white font-thin">
            우리가 만드는 에너지는 당신의 가치를 높입니다. 최적의 태양광
            솔루션으로 경제성과 지속 가능성을 모두 실현하세요. <br />
            에너지플랜이 함께합니다.
          </div>
          <button className="bg-[#dc404a] text-white rounded-lg hover:bg-white hover:text-green-900 p-4 font-semibold">
            <Link href="/">태양공 견적문의</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainVideo;
