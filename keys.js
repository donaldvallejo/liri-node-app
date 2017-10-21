//  DonaldVallejo Liri-node-app
const Spotify = require('node-spotify-api')
const Twitter = require('twitter')
const omdb = require('omdb')
const fs = require('fs');

const spotifyKeys = new Spotify({
  id: '2e5d8fa597944d25b2f0ce1170d129bd',
  secret: 'd148d78b10224966982eb37909e6d81b'
});

const twitterKeys = new Twitter ({
  consumer_key: 'hl0QWM96OeSPoCwTxEuOgJ84A',
  consumer_secret: 'zFIbNMqcOptEjb2lwQhLyq35zQfTVUS01vYVpjyBrL0WC9Zx7S',
  access_token_key: '919328996373827584-Y0Z8b2V1Bc3fLLUgsxmedmVqgpFkvHy',
  access_token_secret: '2J7YuOzNOAdTQMr3nRMkyxVGLNEjbcu5Ktxs5KITcvuBw',
});

const omdbKeys = new omdb ({
  omdbAPI: 'http://www.omdbapi.com/?i=tt3896198&apikey=40e9cece&t=',
  // posterAPI: 'http://img.omdbapi.com/?i=tt3896198&h=600&apikey=fed23f72'
});

console.log('keys loading \n');

module.exports = {
  twitterKeys,
  spotifyKeys,
  omdbKeys
};
