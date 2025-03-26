'use client';

import React, { useState, useEffect } from 'react';
import classes from '../home.module.css';
import { getCartBannerData, getCartData } from '../../data/loader';
import Banner from '../../../components/Banner';
import { getStrapiURL } from '../../utils/get-strapi-url';
import { ArrowLeft, ArrowRight } from '@styled-icons/bootstrap';
import Link from 'next/link';


async function fetchData() {
    const data = await getCartData();
    return data ? data.data : null;
}

export default function BlogPage() {
    const [data, setData] = useState(null);
    const [banner, setBanner] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const BASE_URL = getStrapiURL();

    useEffect(() => {
        fetchData().then(setData);

        async function fetchDataa() {
            try {
                const banners = await getCartBannerData();
                setBanner(banners);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchDataa();

    }, []);

    if (!data) return <p>Loading...</p>;

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
   
    return (
        <div>
            <Banner classes={classes} BASE_URL={BASE_URL} data={banner?.data?.blocks[0]} />

            <section className={`${classes.ss_blog_main_sec} ${classes.ss_blog_page_main_sec}`}>
                <div className="container">
                    <div className={`row ${classes.ss_blog_page_row}`}>
                        {currentItems.map((item, index) => (

                            <div key={index} className={`col-lg-4 col-md-6 ${classes.ss_blog_page_col}`}>
                                <div className={classes.ss_blog_bx_div}>
                                    <Link href={`/blog-details/${item.documentId}`}>
                                        <div><img src={`${BASE_URL}${item.image.url}`} alt="Blog" /></div>
                                        <div className={classes.ss_blog_text_bx_div}>
                                            <div className={classes.ss_blog_cale_bx_div}>
                                                <img src="../../img/blog-cale-icon.png" alt="Calendar" /> Posted on : {new Date(item.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                            </div>
                                            <p>{item.description.split(" ").slice(0, 12).join(" ") + (item.description.split(" ").length > 12 ? "..." : "")}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className={classes.ss_blog_count}>
                                <ul>
                                    <li onClick={() => paginate(currentPage - 1)}><ArrowLeft size={20} /></li>
                                    {[...Array(totalPages).keys()].map((number) => (
                                        <li key={number + 1} className={currentPage === number + 1 ? classes.active : ''} onClick={() => paginate(number + 1)}>
                                            {number + 1}
                                        </li>
                                    ))}
                                    <li onClick={() => paginate(currentPage + 1)}><ArrowRight size={20} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
