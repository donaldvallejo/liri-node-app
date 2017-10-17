const keys = require('../keys');
const twitter = require('twitter');

const getTweets = () =>  {
  console.log("hello from twitter file!");
}
var options = { screen_name: 'donny_vallejo',
                count: 20
               };

keys.get('statuses/user_timeline', options, function(err, data) {
  console.log(data[0].created_at);
  for (var i = 0; i < data.length ; i++) {
    console.log("Tweets", data[i].created_at, " \n", data[i].text);
  }
})

try {
   getTweets(); // generates an exception
}
catch (e) {
   // statements to handle any exceptions
   console.log("error in twitter.js", e); // pass exception object to error handler
}
module.exports = {
  getTweets,
};

// var christmas = {
//    sled: "raindeer",
//    santaClause: "presents"
//  };
//
// for( var key in christmas) {
//   if(key === sled) {
//     console.log(christmas[key]);
//   }
// }
//
// let arraySample = [1, christmas, 3, 'cat', [], {animal: 'mouse'}, ];
//
// console.log(arraySample[5]);
// console.log(arraySample[5].animal);

// TODO: get tweets
// 2. format with a promise
// 3. .then(tweets => {console.log("tweets", tweets);
//  find
//})
