const tweets = require('./commands/twitter.js')
const spotify = require('./commands/spotify.js')
const omdb = require('./commands/omdb.js')
const command = process.argv[2];
const commandValue = process.argv[3];


switch (command) {
  case "my-tweets":
    // tweets.searchTwitter(commandValue);
    // console.log("tweet case");
    break;

  case "spotify-this-song":
    spotify.searchSpotify(commandValue);
    console.log('spotify case');
    break;

  case "movie-this":
    // some function
    console.log('movie case');
    break;

  case "do-what-it-says":
    // some function
    console.log('previous case');
    break;
}
