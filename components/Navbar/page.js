import { getGlobalSettings } from '../../src/data/loader';
import Link from 'next/link'
import { notFound } from 'next/navigation';
import React from 'react'
import classes from '../../src/app/home.module.css'
import { getStrapiURL } from '../../src/utils/get-strapi-url';


async function loader() {
    const navbar = await getGlobalSettings();
    if (!navbar) notFound();
    return { ...navbar.data.header }
}


export default async function Navbar() {
    const data = await loader();
    const BASE_URL = getStrapiURL();
    return (
        <>
            <header className={classes.ss_header_sec}>
                <div className="container">
                    <div className={classes.ss_row}>
                        <div className="col-lg-2">
                            <div className={classes.ss_logo_sec}>
                                <Link href="/"><img src={`${BASE_URL}${data.logo.image.url}`} /></Link>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className={classes.ss_home_hed_rit_menu}>
                                <ul>
                                    {data.navigation.map((item, index) =>
                                        <li key={index}><Link href={item.href}>{item.text}</Link></li>
                                    )}
                                    {data.cta.map((item, index) =>
                                        <li  key={index}  className={item.text == "CONTACT US" ? classes.ss_hed_btn_1 : classes.ss_hed_btn_2}><a href="#">{item.text}</a></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}
