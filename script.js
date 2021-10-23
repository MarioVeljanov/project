"use strict.";

const numberOfFilms = prompt("Колку филмови имаш изгледано?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
 
const a = prompt("Еден од последни гледани филмови?");
const b = prompt("Kolku poeni?"); 
const c = prompt("Еден од последни гледани филмови?");
const d = prompt("Kolku poeni?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
