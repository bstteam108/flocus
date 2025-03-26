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
              cta: true, // Assuming 'cta' is a field inside the block
            },
          },
        },
      },


    },
  }
);


export async function getHomePage() {

  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });

}


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
    footer: {
      populate: {
        link: true
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
          image: {
            fields: ["url", "alternativeText"],
          },
        },
});

export async function getCartData() {
  const path = "/api/blog-carts";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = getCartDataQuery;
  return fetchAPI(url.href, { method: "GET" });
}

const secondPageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.banner-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
          "blocks.info-block": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true, // Assuming 'cta' is a field inside the block
            },
          },
        },
      },
      cart: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      blockSection: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          icon: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      cartSection: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  }
);

export async function getSecondPage() {

  const path = "/api/second-page";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = secondPageQuery;

  return await fetchAPI(url.href, { method: "GET" });

}

const thirdPageQuery = qs.stringify(
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
        },
      },
      images: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      img: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  }
);

export async function getThirdPage() {

  const path = "/api/third-page";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = thirdPageQuery;

  return await fetchAPI(url.href, { method: "GET" });

}

const applicationPageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.banner-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
      images: {

        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },

      },
      cart: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      }
    },
  }
);

export async function applicationPage() {

  const path = "/api/application";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = applicationPageQuery;

  return await fetchAPI(url.href, { method: "GET" });

}

const choosingPageQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.banner-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
      cart: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
           text:true,
        },
      },
    },
  }
);

export async function choosingPage() {

  const path = "/api/choosing-flocus-kapok";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = choosingPageQuery;

  return await fetchAPI(url.href, { method: "GET" });

}

export async function getCartByIdData(id) {
  const path = `/api/blog-carts/${id}`;
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = getCartDataQuery;
  return fetchAPI(url.href, { method: "GET" });
}

const getBannerCartDataQuery = qs.stringify(
  {
    populate: {
      blocks: {
        on: {
          "blocks.banner-section": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
            },
          },
        },
      },
    },
  }
);

export async function getCartBannerData() {
  const path = `/api/knowledg-hub`;
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = getBannerCartDataQuery;
  return fetchAPI(url.href, { method: "GET" });
}