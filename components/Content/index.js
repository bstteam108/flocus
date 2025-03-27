import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const ContentPage = ({classes, BASE_URL, infoBlocks}) => {

    return (
        <>
            {infoBlocks.map((item, index) => (
                <section key={item.id || index} className={`${!item.reversed ? classes.ss_full_banner_text_left : classes.ss_full_banner_text} ${item.cta.href == 'choosing-flocus-kapok' ? classes.section_class:""}`}>
                    <div>
                        <img src={`${BASE_URL}${item.image.url}`} />
                    </div>

                    <div className={!item.reversed ? classes.ss_text_left_box : classes.ss_full_text_box}>
                        <h2>{item.title}</h2>
                        <h4> <ReactMarkdown>{item.content}</ReactMarkdown> </h4>
                        <Link href={item.cta.href}>{item.cta.text}</Link>
                    </div>
                </section>

            ))}

        </>
    )
}

export default ContentPage