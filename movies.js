var axios = require("axios");
var fs = require("fs");

var movie = function () {
    //OMDB API
    var divider = "\n----------\n";
    var apiOmdb = "e3dd0b96";
    var omdbTitle = "&t=";
    var URL = "http://www.omdbapi.com/?&apikey=" + apiOmdb + omdbTitle + input; 
    
    axios.get(URL)
        .then(function (resp){

            var omdbData = resp.data; 
            console.log("\n\n ------ movie -------");
            var omdbInfo = [
                "Movie: " + omdbData.Title, 
                "Year: " + omdbData.Year, 
                "Genre(s): " + movie.Data.Genre,
                "Rating: " + omdbData.Rated,
                "Actors: " + omdbData.Actors, 
                "Summary: " + omdbData.Plot,
                "imdb Rating: " + omdbData.imdbRating,
                "Rotten Tomatoes Rating: " + omdbData.Ratings[1].Value,
                "Metacritic: " + omdbData.Ratings[2].Value, 
                "Language: " + omdbData.Language,
                "Network: " + omdbData.Production, 
                "Website: " + omdbData.Website, 
            ].join("\n");

            fs.appendFile("log.txt", omdbInfo + divider, function (err){
                if (err) throw err; 
            })

            console.log(omdbInfo);
        })
        .catch(function(err){
            console.log(err);
        })
};
module.exports = movie; 