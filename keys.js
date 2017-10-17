//  DonaldVallejoLiri-node-app
console.log('this is loaded');
const twitter = require('twitter');
// const spotify = require('node-spotify-api');

const twitterKeys = new twitter ({
  consumer_key: 'hl0QWM96OeSPoCwTxEuOgJ84A',
  consumer_secret: 'zFIbNMqcOptEjb2lwQhLyq35zQfTVUS01vYVpjyBrL0WC9Zx7S',
  access_token_key: '919328996373827584-Y0Z8b2V1Bc3fLLUgsxmedmVqgpFkvHy',
  access_token_secret: '2J7YuOzNOAdTQMr3nRMkyxVGLNEjbcu5Ktxs5KITcvuBw',
})

// const spotifyKey = new spotify ({
//   id: '2e5d8fa597944d25b2f0ce1170d129bd',
//   secret: 'd148d78b10224966982eb37909e6d81b'
// })


module.exports = twitterKeys
