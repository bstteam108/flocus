'use client'

import { getStrapiURL } from '../../utils/get-strapi-url';
import { applicationPage } from '../../data/loader';
import React, { useEffect, useState } from 'react';
import classes from '../home.module.css';
import ReactMarkdown from 'react-markdown';
import Banner from '../../../components/Banner';
import SliderPage from '../../../components/SliderPage';

export default function Application() {
  const [data, setData] = useState(null);
  const BASE_URL = getStrapiURL();

  useEffect(() => {
    async function fetchData() {
      const response = await applicationPage();
      if (response) {
        setData(response.data);
      }
    }
    fetchData();
  }, []);

  if (!data || !data.images || !Array.isArray(data.images.image)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner classes={classes} BASE_URL={BASE_URL} data={data.blocks[0]} />

      <section className={classes.ss_where_sec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>{data.title}</h2>
            </div>
          </div>
        </div>
      </section>

      <SliderPage classes={classes} data={data.images} BASE_URL={BASE_URL} />

      <section className={`${classes.ss_blog_main_sec} ${classes.ss_what_kapa_pg}`}>
        <div className="container">
          <div className={classes.ss_blog_view_head_dv}>
            <div className="row">
              <div className="col-lg-6">
                <h2>HElo</h2>
                <p>hello</p>
              </div>
              <div className="col-lg-6">
                <div className={classes.ss_blog_view_dv}>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className={classes.ss_why_icon_div}>
              <ul>
                {data.cart.map((item, index) => (
                  <li key={index}>
                    <div>
                      <img src={`${BASE_URL}${item.image.url}`} alt="Cart Item" />
                    </div>
                    <h4>
                      <ReactMarkdown>{item.description}</ReactMarkdown>
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
