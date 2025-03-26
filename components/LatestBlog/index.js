'use client'

import React, { useEffect, useState } from 'react';
import classes from '../../src/app/home.module.css';
import { getCartData } from '../../src/data/loader';
import { getStrapiURL } from '../../src/utils/get-strapi-url';

export default function LatestBlog() {
    const [data, setData] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const BASE_URL = getStrapiURL();

    useEffect(() => {
        async function fetchData() {
            const response = await getCartData();
            if (response && response.data) {
                const sortedData = response.data
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 6);
                
                setData(sortedData);
            } else {
                setData(null);
            }
        }
        fetchData();
    }, []);

    // Format date function
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            month: "short", 
            day: "2-digit", 
            year: "numeric", 
            hour: "2-digit", 
            minute: "2-digit", 
            hour12: true 
        };
        return date.toLocaleString("en-US", options);
    };

    // Filtered blogs based on search query
    const filteredData = data
        ? data.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    return (
        <div className="col-lg-3">
            {/* Search Form */}
            <form>
                <div className={classes.ss_blog_search_div}>
                    <input 
                        type="search" 
                        id="mySearch" 
                        name="q" 
                        placeholder="Search..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="button">
                        <img src="/img/search-icon.png" alt="Search" />
                    </button>
                </div>
            </form>

            {/* Blog List */}
            <div className={classes.ss_blog_latest_blog}>
                <h2>Latest Blog & Research</h2>
            
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div key={item.id} className={classes.ss_blg__latest_sml_div}>
                            <p>{item.title}</p>
                            <div className={classes.ss_blog_latest_date}>
                                <img src="/img/blog-cale-icon.png" alt="Calendar Icon" />
                                <p>Posted on: {formatDate(item.createdAt)}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

