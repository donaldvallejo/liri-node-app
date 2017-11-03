const fs = require('fs');

  const omdb = require('./omdb.js')
  const spotify = require('./spotify.js')
  const tweets = require('./twitter.js')


const executeCommand = function(command, commandValue) {
  switch (command) {
    case "my-tweets":
      tweets.searchTwitter(commandValue);
      // console.log("tweet case");
      break;

    case "spotify-this-song":
      spotify.searchSpotify(commandValue);
      // console.log('spotify case');
      break;

    case "movie-this":
      // some function
      omdb.getMovie(commandValue);
      // console.log('movie case');
      break;

    case "do-what-it-says":
      doWhatItSays();
      // console.log('previous case');
      break;

    default:
      console.log('I Dont Know What That Means?');
      break;
  }
}

const doWhatItSays = () => {
  fs.readFile('./commands/random.txt', (error, data) => {
		if (error) {
			throw error
		};

    let randomTxt = data.toString().split(',');
    		let command = randomTxt[0];
    		let commandValue = randomTxt[1];
        executeCommand(command, commandValue);
    	});
    }
    module.exports = {
      executeCommand
    };
