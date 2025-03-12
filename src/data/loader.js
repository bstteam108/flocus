import { fetchAPI } from "../utils/fetch-api";
import { getStrapiURL } from "../utils/get-strapi-url";
import qs from 'qs'

const homePageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.banner-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              logo: {
                populate: {
                  image: {
                    fields: ["url", "alternativeText"],
                  },
                },
              },
            },
          },
          "blocks.info-block": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta:true, // Assuming 'cta' is a field inside the block
            },
          },
        },
      },
    },
  }
);


export async function getHomePage(){

   const path = "/api/home-page";
   const BASE_URL = getStrapiURL();

   const url = new URL(path, BASE_URL);
   url.search = homePageQuery;

   return await fetchAPI(url.href, {method : "GET"});

}


// const globalSettingQuery = qs.stringify({
//   populate: {
//     header: {
//       populate: {
//         logo: {
//           populate: {
//             image: {
//               fields: ["url", "alternativeText"],
//             },
//           },
//         },
//         navigation: true,
//         cta: true,
//       },
//     },
//   },
// });

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        navigation: true,
        cta: true,
      },
    },
    footer :{
     populate: {
       link : true
     }
    }
  },
});

export async function getGlobalSettings() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}

const getCartDataQuery = qs.stringify({
  populate: {
    cart: {
     
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
    },
  },
});

export async function getCartData() {
  const path = "/api/knowledg-hub";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = getCartDataQuery;
  return fetchAPI(url.href, { method: "GET" });
}