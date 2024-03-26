"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, Loop } from "swiper";

import classes from "./EventSlide.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import slides from "@/utils/data/eventSlide"; // data.js에서 슬라이드 데이터 가져오기

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, Loop]);

const EventSlide = () => {
  return (
    <div>
      <Swiper spaceBetween={0} slidesPerView={1} navigation loop pagination={{ clickable: true }} autoplay={{ delay: 2500, disableOnInteraction: false }} scrollbar={{ draggable: true }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={classes.slideImg}>
              <Image src={slide.src} layout="fill" objectFit="cover" alt={slide.alt} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventSlide;
