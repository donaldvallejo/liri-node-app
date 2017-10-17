const keys = require('../keys');
const Twitter = require('twitter');

const twitterKeys = keys.twitterKeys;
const client = Twitter(twitterKeys);

// console.log("hello from twitter file! \n");

// const searchTwitter = () => {
  let options = {
    screen_name: 'donny_vallejo',
    count: 20
  };


  client.get('statuses/user_timeline', options, function(err, data) {
    console.log(data[0].created_at);
    for (let i = 0; i < data.length ; i++) {
      console.log("Tweeted on", data[i].created_at, " \n", data[i].text, " \n");
    }
  })
// };

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
