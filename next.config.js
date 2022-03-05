const withPWA = require('next-pwa')

module.exports = withPWA({
    env: {
        wordpressApiUrl: "https://newsctrls.com/graphql",
        headerMenuName: "TieLabs Main Menu"
    },
    images: {
        domains: ['newsctrls.com', 'i0.wp.com', 'secure.gravatar.com', 'babacricnews.s3.ap-south-1.amazonaws.com'],
    },
})