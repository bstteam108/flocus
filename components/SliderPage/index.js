'use client';

import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderPage({classes, data, BASE_URL}) {


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* Slider Section */}
      <section className={classes.ss_traditional_slid_sec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>{data.title}</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Slider {...sliderSettings}>
                {data.image.map((item, index) =>

                  <div key={index} className={classes.ss_traditional_slid_div}>
                    <img src={`${BASE_URL}${item.url}`} alt={`Slide ${index + 1}`} />
                  </div>

                )}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
