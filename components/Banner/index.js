import React from 'react'

export default function Banner ({classes, BASE_URL, data}) {
    return (
        <section className={classes.ss_banner_main_sec}>

            <div className={classes.ss_banner_img}>
                <img src={`${BASE_URL}${data?.image.url}`} />
            </div>
            <div className={classes.ss_banner_text} >
                <h2>{data?.headdin}</h2>
            </div>

        </section>
    )
}
