require("dotenv").config();
require("./spotify")
var keys = require("./keys");
var movie = require("./movies");
var Spotify = require('node-spotify-api');
var fs = require("fs");

var spotify = new Spotify(keys.spotify);
var input = process.argv[3];
var command = process.argv[2]

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data); 
  });
// for (i = 4; i < process.argv.length; i++) {
//     input += " " + process.argv[i];
// }

// fs.appendFile('random.txt', command, function (err) {
//     if (err) throw err; 
//     fs.readFile("random.txt", "utf8", (err, data) => {
//         if (err) throw err;
//         return data;
//         // fs.writeFile("random.txt", 0, function (){});
// }); console.log(data);
// })

// if (process.argv[2] === "spotifySong" && process.argv[3]) {
//     spotType = "track";
//     spotifySong(spotType, input);
// }

// else if (process.argv[2] === "spotifySong" && process.argv[3] == undefined) {
//     spotType = "type";
//     input = "We Are 138"
//     spotifySong(spotType, input);
// }

// else if  (process.argv[2] === "oMovie" && process.argv[3] !== undefined) {
//     movie(input);

// }

// else if (process.argv[2] === "oMovie" && process.argv[3] == undefined) {
//     input = "The Room"
//     movie(input);
// }

// function spotifySong(){
//     spotify.search({ type: spotType, query: input, limit: 1 })
//     .then(function (response){
//         console.log("\nSong: " + response.tracks.items[0].album.name);
//         console.log("\nArtist: " + response.tracks.items[0].album.artists[0].name);
//         console.log("\nAlbum: " + response.tracks.items[0].album.name);
//         console.log("\nPreview URL: " + response.tracks.items[0].preview_url);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }
