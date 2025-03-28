'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function SliderPage({ classes, data, BASE_URL }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data) return null; // Prevents undefined errors
  if (!isClient) return <p>Loading...</p>; // Prevents window-related issues
  return (
    <section className={classes.ss_traditional_slid_sec}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4>{data?.title}</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper
              slidesPerView={3} // 3 items at a time
              spaceBetween={20}
              loop={true} // Continuous loop
              autoplay={{
                delay: 5000, // 2 seconds per slide
                disableOnInteraction: false, // User interaction ke baad bhi autoplay continue rahe
              }}
              navigation
              // pagination={{ clickable: true }}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
            >
              {data?.image?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div key={index} className={classes.ss_traditional_slid_div}>
                    <img src={`${BASE_URL}${item?.url}`} alt={`Slide ${index + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
