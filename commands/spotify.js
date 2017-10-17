const keys = require('../keys');
// const Spotify = require('node-spotify-api');

// const spotifyKeys = keys.spotifyKeys;
// const client =  Spotify(spotifyKeys);

const spotifyClient = keys.spotifyClient;

const searchSpotify = (userInput) => {
  // console.log(spotifyClient);
  spotifyClient
    .search({ type: 'track', query: userInput })
    .then(function(response) {
      console.log("Artists \n", response.tracks.items[0].artists[0].name, " \n");
      console.log("Song Name \n", response.tracks.items[0].name, " \n");
      console.log("Preview Link \n", response.tracks.items[0].preview_url, " \n");
      console.log("Album \n", response.tracks.items[0].album.name, " \n");


      // console.log(response[0]);
    })
    .catch(function(err) {
      console.log(err);
    });
}
module.exports = {
  searchSpotify
};
