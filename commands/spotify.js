const keys = require('../keys');
// const Spotify = require('node-spotify-api');

// const spotifyKeys = keys.spotifyKeys;
// const client =  Spotify(spotifyKeys);

const spotifyClient = keys.spotifyClient;

// spotifyClient
//   .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

const searchSpotify = (userInput) => {
  // console.log(spotifyClient);
  spotifyClient
    .search({ type: 'track', query: userInput })
    .then(function(response) {
      console.log("Artists", response.tracks.items[0].artists[0].name);
      // console.log(response[0]);
    })
    .catch(function(err) {
      console.log(err);
    });
}
module.exports = {
  searchSpotify
};
//
// const getArtist = () => {
//   console.log('hello from artist search');
// .search({ type: 'track', query: 'All the Small Things' })
//   .then(function(response) {
//     console.log(response);
//   })
// }
//   .catch(function(err) {
//     console.log(err);
//   });
//
// // show
// //   Artist(s)
// //
// //   The song's name
// //   A preview link of the song from Spotify
// //   The album that the song is from
