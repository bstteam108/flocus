import { getCartData } from '../../src/data/loader';
import React from 'react'

async function loader() {
    const data = await getCartData();
    if (!data) notFound();
    return { ...data.data }
}

export default async function CartPage({ classes, BASE_URL }) {
    const data = await loader();
    return (
        <section className={classes.ss_blog_main_sec}>
            <div className="container">
                <div className={classes.ss_blog_view_head_dv}>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{data.title}</h2>
                        </div>
                        <div className="col-lg-6">
                            <div className={classes.ss_blog_view_dv}><a href="#">View All</a></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {data.cart.map((item, index) =>
                        <div className="col-lg-4" key={index}>
                            <div className={classes.ss_blog_bx_div}>
                                <div><img src={`${BASE_URL}${item.image.url}`} /></div>
                                <div className={classes.ss_blog_text_bx_div}>
                                    <div className={classes.ss_blog_cale_bx_div}><img src="../../img/blog-cale-icon.png" /> Posted on : {item.date} </div>
                                    <p>{item.description.split(" ").slice(0, 12).join(" ") + (item.description.split(" ").length > 12 ? "..." : "")}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>

    )
}
