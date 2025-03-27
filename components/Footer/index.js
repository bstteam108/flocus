import React from 'react'
import classes from '../../src/app/home.module.css'
import { getStrapiURL } from '../../src/utils/get-strapi-url';
import { getGlobalSettings } from '../../src/data/loader';


async function loader() {
    const setting = await getGlobalSettings();
    if (!setting) notFound();
    return { ...setting.data }
}

export default async function FooterPage() {

    const data = await loader();
    const BASE_URL = getStrapiURL();

    return (
        <footer className={classes.footer_main_sec}>
            <section>
                <div className="container">
                    <div className={classes.ss_foot_top_border}>
                        <div className="row">
                            <div className="col-lg-3">
                                <div>
                                    <img src={`${BASE_URL}${data.header.logo.image.url}`} />
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className={classes.ss_foot_frm_text_flex}>
                                    <div className={classes.ss_foot_frm_text}>
                                        <h4>News Subscription</h4>
                                        <p>Get Latest News & Updates in your inbox.</p>
                                    </div>

                                    <div className={classes.ss_foot_frm}>
                                        <form>
                                            <input type="email" placeholder="Enter your email address" />
                                            <button>Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={classes.ss_foot_main_2}>
                <div className="container">
                    <div className="row">

                        {data.footer.map((item, index) => (
                            <div className="col-lg-3" key={index}>
                                {item.description ? (
                                    <div className={classes.ss_foot_2_abt_comp}>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                        <ul>
                                            <li><a href="#"><img src="../../img/insta-icon.png" /></a></li>
                                            <li><a href="#"><img src="../../img/indeed-icon.png" /></a></li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className={classes.ss_foot_2_abt_link}>
                                        <h4>{item.title}</h4>
                                        <ul>
                                            {item.link.map((items, index) =>
                                                <li key={index}><a href={items.href}>{items.text}</a></li>
                                            )}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={classes.ss_foot_btm}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>© All rights reserved 2025 Flocus. </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
