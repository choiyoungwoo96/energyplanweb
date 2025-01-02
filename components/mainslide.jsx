"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "./mainslide.css";

function Mainslide() {
  return (
    <div>
      <div className="container__videoBox">
        <video width="100%" height="100%" autoPlay muted>
          <source src="../mainslide1.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Mainslide;
