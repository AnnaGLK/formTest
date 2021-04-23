"use strict";


const numberOfFilms = +prompt("how many films...?","");

const personalMovieDB = {

    count: numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

const   a = prompt('one of the latest films?',''),
        b = prompt("rate it", ''),
        c = prompt('one of the latest films?',''),
        d = prompt("rate it", '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);
