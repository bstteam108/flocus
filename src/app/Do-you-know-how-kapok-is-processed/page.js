'use client'

import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { getThirdPage } from '../../data/loader';
import classes from '../home.module.css';
import Banner from '../../../components/Banner';
import { getStrapiURL } from '../../utils/get-strapi-url';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactMarkdown from 'react-markdown'
import SliderPage from '../../../components/SliderPage';

export default function Application() {
  const [data, setData] = useState(null);
  const BASE_URL = getStrapiURL();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getThirdPage();
        if (!result) notFound();
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <Banner classes={classes} BASE_URL={BASE_URL} data={data.blocks[0]} />

      <section className={classes.ss_where_sec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>{data.headding}</h2>
              <ReactMarkdown>{data.descriptions}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}

     <SliderPage classes={classes} data={data.images} BASE_URL={BASE_URL} />

      <SliderPage classes={classes} data={data.img} BASE_URL={BASE_URL} />
    </div>
  );
}
