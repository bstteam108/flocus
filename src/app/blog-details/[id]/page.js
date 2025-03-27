'use client';
import React, { useEffect, useState } from 'react';
import classes from '../../home.module.css';
import { useParams } from 'next/navigation';
import { getStrapiURL } from '../../../utils/get-strapi-url';
import { getCartByIdData } from '../../../data/loader';
import ReactMarkdown from 'react-markdown'
import LatestBlog from '../../../../components/LatestBlog';

export default function BlogDetails() {
    const { id } = useParams(); // Get dynamic route parameter
    const [data, setData] = useState(null);
    const BASE_URL = getStrapiURL();

    useEffect(() => {
        async function fetchData() {
            const response = await getCartByIdData(id);
            setData(response ? response.data : null);
        }
        fetchData();
    }, []); // Fetch data when the component mounts


    return (
        <div>
            <section className={classes.ss_blog_detail_mn_sec}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className={classes.ss_blg_dtl_lft_sec}>
                                <div className={classes.ss_bld_dtl_img_dv}>
                                    <img src={`${BASE_URL}${data?.image.url}`} />
                                </div>
                                <div className={classes.ss_bld_dtl_text_dv}>
                                    <h2>{data?.title}</h2>

                                    <div className={classes.ss_bld_dtl_date_dv}>
                                        <div>
                                            <img src="/img/blog-cale-icon.png" /> Posted on : {new Date(data?.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                        </div>
                                        <ul>
                                            <li><img src="/img/share-icon.png" /> Share :</li>
                                            <li><a href="#"><img src="/img/facebook-icon.png" /></a></li>
                                            <li><a href="#"><img src="/img/instagram-icon.png" /></a></li>
                                            <li><a href="#"><img src="/img/linkdine-icon.png" /></a></li>
                                            <li><a href="#"><img src="/img/x-twitter-icon.png" /></a></li>
                                        </ul>
                                    </div>

                                    <ReactMarkdown>{data?.description}</ReactMarkdown>
                                </div>
                            </div>
                        </div>

                        <LatestBlog />

                       
                    </div>
                </div>
            </section>
        </div>
    );
}
