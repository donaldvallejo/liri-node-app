const keys = require('../keys')
const omdb = require('omdb');
const request = require('request');
const getMovie = (movieName) => {
  // let urlHit = omdbKeys + movieName;
  // console.log('%s (%d) %d/10', omdb.title, omdb.year, omdb.imdb.rating);
  if (!movieName) {
    movieName = 'Mr. Nobody';
  }

  var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";
  let url = keys.omdbKeys.omdbAPI + movieName;
  request(urlHit, function(error, response, body) {
    if (response.statusCode == 200) {
      var data = [];
      var jsonData = JSON.parse(body);
      data.push({
        'Title: ' : jsonData.Title,
        'Year: ' : jsonData.Year,
        'Rated: ' : jsonData.Rated,
        'Country: ' : jsonData.Country,
        'Language: ' : jsonData.Language,
        'Plot: ' : jsonData.Plot,
        'Actors: ' : jsonData.Actors,
        'IMDB Rating: ' : jsonData.imdbRating,
        'Rotten Tomatoes Rating: ' : jsonData.Ratings[1].Value,
      });
      console.log(data);
    }
  })
};

module.exports = { getMovie };
