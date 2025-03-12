import React from 'react'

const ContentPage = ({classes, BASE_URL, infoBlocks}) => {

    return (
        <>

            {infoBlocks.map((item, index) => (
                <section key={item.id || index} className={!item.reversed ? classes.ss_full_banner_text_left : classes.ss_full_banner_text}>
                    <div>
                        <img src={`${BASE_URL}${item.image.url}`} />
                    </div>

                    <div className={!item.reversed ? classes.ss_text_left_box : classes.ss_full_text_box}>
                        <h2>{item.title}</h2>
                        <h4>{item.content}</h4>
                        <a href={item.cta.href}>{item.cta.text}</a>
                    </div>
                </section>

            ))}

        </>
    )
}

export default ContentPage