import { notFound } from 'next/navigation';
import { getCartData, getHomePage } from '../data/loader';
import classes from './home.module.css'
import { getStrapiURL } from '../utils/get-strapi-url';
import Banner from '../../components/Banner';
import ContentPage from '../../components/Content';
import CartPage from '../../components/Cart';


async function loader() {
  const data = await getHomePage();
  const cart = await getCartData();
  if (!data) notFound();
  return { ...data.data }
}



export default async function Home() {
  const data = await loader();
  const BASE_URL = getStrapiURL();


  const infoBlocks = [];

  data.blocks?.forEach(block => {
    if (block.__component === "blocks.info-block") {
      infoBlocks.push(block);
    }
  });

  return (

    <div>
      <Banner classes={classes} BASE_URL={BASE_URL} data={data.blocks[0]} />

      <ContentPage classes={classes} BASE_URL={BASE_URL} infoBlocks={infoBlocks} />

      <CartPage classes={classes} BASE_URL={BASE_URL} />
    </div>
  );
}
