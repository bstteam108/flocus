"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
    const val = Array(9).fill(1); // More concise way to create an array of 9 elements

    return (
        <Swiper
            slidesPerView={3} // 3 items at a time
            spaceBetween={20}
            loop={true} // Continuous loop
            autoplay={{
                delay: 2000, // 2 seconds per slide
                disableOnInteraction: false, // User interaction ke baad bhi autoplay continue rahe
            }}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
        >
            {val.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="bg-blue-500 text-white p-10 rounded-lg">
                        Item {index + 1}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
