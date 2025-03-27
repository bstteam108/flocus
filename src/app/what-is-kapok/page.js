import { getSecondPage } from '../../data/loader';
import classes from '../home.module.css'
import Banner from '../../../components/Banner';
import { getStrapiURL } from '../../utils/get-strapi-url';
import ReactMarkdown from 'react-markdown'


async function loader() {
  const data = await getSecondPage();
  if (!data) notFound();
  return { ...data.data }
}


export default async function Home() {

  const data = await loader();
  const BASE_URL = getStrapiURL();

  return (
    <div>
      <Banner classes={classes} BASE_URL={BASE_URL} data={data.blocks[0]} />

      <section className={`${classes.ss_blog_main_sec} ${classes.ss_what_kapa_pg}`}>
        <div className="container">
          <div className={classes.ss_blog_view_head_dv}>
            <div className="row">
              <div className="col-lg-6">
                <h2>{data.cartTitile}</h2>
                <p>{data.description}</p>
              </div>
              <div className="col-lg-6">
                <div className={classes.ss_blog_view_dv}><a href="/contact-us">Contact Us</a></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className={classes.ss_why_icon_div}>
              <ul>
                {data.cart.map((item, index) =>

                  <li key={index}>
                    <div>
                      <img src={`${BASE_URL}${item.image.url}`} />
                    </div>
                    <h4><ReactMarkdown>{item.description}</ReactMarkdown></h4>
                  </li>

                )}
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className={classes.ss_full_banner_text_left}>
        <div>
          <img src={`${BASE_URL}${data.blocks[1].image.url}`} />
        </div>

        <div className={classes.ss_text_left_box}>
          <h4>{data.blocks[1].content}</h4>
          <a href={data.blocks[1].cta.href}>{data.blocks[1].cta.text}</a>
        </div>
      </section>

      <section className={classes.ss_what_is_page_left_sec}>
        <div className="conainer-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className={classes.ss_what_center}>
                <h2>Flocus&apos; kapok fiber is Oeko-Tex Standard 100 certified.`</h2>
              </div>
            </div>
          </div>


          {data.blockSection.map((item, index) => (
            item.reversed ? (
              <div className="row" key={index}>
                <div className={`col-lg-6 ${classes.padd_rit_0}`}>
                  <div className={classes.ss_what_is_page_lft_txt_img_full}>
                    <img src={`${BASE_URL}${item.image.url}`} alt="Clarus" />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className={classes.ss_what_is_page_lft_txt_img}>
                    <div className={classes.ss_what_is_page_lft_img_s}>
                      <img src={`${BASE_URL}${item.icon.url}`} alt="Textile" />
                    </div>
                    <div className={classes.ss_what_is_textt_sec}>
                      <h2>{item.title}</h2>
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row" key={index}>
                <div className="col-lg-6">
                  <div className={classes.ss_what_is_page_lft_txt_img}>
                    <div className={classes.ss_what_is_page_lft_img_s}>
                      <img src={`${BASE_URL}${item.icon.url}`} alt="Why Icon" />
                    </div>
                    <div className={classes.ss_what_is_textt_sec}>
                      <h2>{item.title}</h2>
                      <ReactMarkdown>{item.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>

                <div className={`col-lg-6 ${classes.padd_lft_0}`}>
                  <div className={classes.ss_what_is_page_lft_txt_img_full}>
                    <img src={`${BASE_URL}${item.image.url}`} alt="Fina Image" />
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      <section className={classes.ss_what_last_sec}>
        <div className="container">
          <div className={`row ${classes.align_center}`}>
            <div className="col-lg-6">
              <div className={classes.ss_what_pg_last_img_dv}>
                <img src={`${BASE_URL}${data.cartSection.image.url}`} alt="Cart Section" />
              </div>
            </div>
            <div className="col-lg-6">
              <h2>{data.cartSection.title}</h2>
              <ReactMarkdown>{data.cartSection.description}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}