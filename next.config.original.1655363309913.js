const withPWA = require('next-pwa');

module.exports = withPWA({
  env: {
    //wordpressApiUrl: 'https://newsctrls.com/graphql',
    wordpressApiUrl: 'https://newsctrls.stellate.sh/',
    headerMenuName: 'TieLabs Main Menu',
    text: {
      MORE: 'More',
      FOOTER_DESC:
        'NewsCtrls.com provides latest news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us.',
    },

    home: {
      categoryList: {
        SIDEBAR: {
          SIDEBAR_NAME: 'Breaking News',
          SIDEBAR_SLUG: '/category/breaking-news',
        },

        CATEGORY_A: {
          CATEGORY_A_NAME: 'Entertainment',
          CATEGORY_A_SLUG: '/category/entertainment',
        },
        CATEGORY_B: {
          CATEGORY_B_NAME: 'Bollywood',
          CATEGORY_B_SLUG: '/category/bollywood',
        },
        CATEGORY_C: {
          CATEGORY_C_NAME: 'IPL 2022',
          CATEGORY_C_SLUG: '/category/ipl-2022',
        },
        CATEGORY_D: {
          CATEGORY_D_NAME: 'Social News',
          CATEGORY_D_SLUG: '/category/social-news',
        },
        CATEGORY_E: {
          CATEGORY_E_NAME: 'Social News',
          CATEGORY_D_SLUG: '/category/social-news',
        },
        // CATEGORY_B: 'Romance',
      },
    },

    image: {
      LOGO: 'https://newsctrls.com/wp-content/uploads/2022/04/news-ctrls.com-1.png',
    },
    color: {
      PRIMARY_COLOR: '#1e4683',
    },
  },
  images: {
    domains: [
      'newsctrls.com',
      'i0.wp.com',
      'secure.gravatar.com',
      'babacricnews.s3.ap-south-1.amazonaws.com',
    ],
  },
});
