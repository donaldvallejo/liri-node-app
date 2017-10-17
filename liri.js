const tweets = require('./commands/twitter.js')
const spotify = require('./commands/spotify.js')
const omdb = require('./commands/omdb.js')
const command = process.argv[2];
const commandValue = process.argv[3];


switch (command) {
  case "my-tweets":
    console.log("tweet case");
    // tweets.getTweets();
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


// const params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
