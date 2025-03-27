
import Link from 'next/link'
import React from 'react'
import classes from '../../src/app/home.module.css'



export default function BrowserNavbar({data, BASE_URL}) {
    return (
        <>
            <header className={classes.ss_header_sec}>
                <div className="container">
                    <div className={classes.ss_row}>
                        <div className="col-lg-2">
                            <div className={classes.ss_logo_sec}>
                                <Link href="/"><img src={`http://admin.flocus.store${data.logo.image.url}`} /></Link>
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