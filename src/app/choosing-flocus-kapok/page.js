import { getStrapiURL } from '../../utils/get-strapi-url';
import { choosingPage } from '../../data/loader';
import Banner from '../../../components/Banner';
import classes from '../home.module.css';
import { notFound } from 'next/navigation';

async function getData() {
  const data = await choosingPage();
  if (!data) notFound();
  return { ...data.data };
}

export default async function ChoosingFlocusKapok() {
  const data = await getData();
  const BASE_URL = getStrapiURL();

  return (
    <div>
      <Banner classes={classes} BASE_URL={BASE_URL} data={data.blocks[0]} />

      {data.cart.map((item, index) => (
        <section
          key={index}
          className={`${classes.ss_choose_card_mn_sec} ${item.reverse ? '' : classes.ss_choose_dark_gry_bg}`}
        >
          <div className={`container-fluid ${classes.ss_choose_cont}`}>
            <div className={`row ${classes.ss_choose_row}`}>
              {item.reverse ? (
                <>
                  <div className="col-lg-6">
                    <div className={classes.ss_choose_li_div}>
                      <h2>{item.title}</h2>
                      <ul>
                        {item.text.map((items, ind) => (
                          <li key={ind}>{items.list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={`col-lg-6 ${classes.padd_lft_0}`}>
                    <div className={classes.ss_choose_lef_img_div}>
                      <img src={`${BASE_URL}${item.image.url}`} alt="Kapok trees" />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`col-lg-6 ${classes.padd_rit_0}`}>
                    <div className={classes.ss_choose_lef_img_div}>
                      <img src={`${BASE_URL}${item.image.url}`} alt="Kapok benefits" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className={classes.ss_choose_li_div}>
                      <h2>{item.title}</h2>
                      <ul>
                        {item.text.map((items, ind) => (
                          <li key={ind}>{items.list}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
