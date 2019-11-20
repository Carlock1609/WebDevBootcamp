let movies = [
    {title: "In Bruges", hasWatched: true, rating: 5},
    {title: "Frozen", "not seen": false, rating: 4.5},
    {title: "Mad Max Fury Road", hasWatched: true, rating: 5},
    {title: "Les Miserables", "not seen": false, rating: 3.5},
];

function buildString(movie){
    let result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    }
    else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
}
movies.forEach(function(movie){
    console.log(buildString(movie));
});