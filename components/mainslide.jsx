"use client";
import { Swiper, SwiperSlide } from "swiper/react";

function Mainslide() {
  return (
    <div className="w-full">
      <video width="100%" height="100%" autoPlay muted>
        <source src="../mainslide1.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}

export default Mainslide;
