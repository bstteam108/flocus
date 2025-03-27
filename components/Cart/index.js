import Link from 'next/link';
import { getCartData } from '../../src/data/loader';
import React from 'react';

async function loader() {
    const data = await getCartData();
    if (!data) notFound();
    return data.data; // Returning data object correctly
}

export default async function CartPage({ classes, BASE_URL }) {
    const filteredData = await loader();

    // Ensure filteredData.cart exists before slicing
    const cartItems = filteredData?.slice(0, 3) || [];

    return (
        <section className={classes.ss_blog_main_sec}>
            <div className="container">
                <div className={classes.ss_blog_view_head_dv}>
                    <div className="row">
                        <div className="col-md-6">
                            <h2>{filteredData?.title || "Cart Items"}</h2>
                        </div>
                        <div className="col-md-6">
                            <div className={classes.ss_blog_view_dv}><Link href="/blog-list">View All</Link></div>
                        </div>
                    </div>
                </div>
                <div className={`row ${classes.ss_hm_blog_page_row}`}>
                    {cartItems.map((item, index) => (
                        <div className={`col-lg-4  ${classes.ss_hm_blog_page_col}`} key={index}>
                            <div className={classes.ss_blog_bx_div}>
                                <Link href={`/blog-details/${item.documentId}`}>                                <div>
                                    <img src={`${BASE_URL}${item.image?.url || ""}`} alt="Cart Item" />
                                </div>
                                <div className={classes.ss_blog_text_bx_div}>
                                    <div className={classes.ss_blog_cale_bx_div}>
                                        <img src="../../img/blog-cale-icon.png" alt="Calendar Icon" />
                                        Posted on: {item.date}
                                    </div>
                                    <p>
                                        {item.description.split(" ").slice(0, 12).join(" ") + (item.description.split(" ").length > 12 ? "..." : "")}
                                    </p>
                                </div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
