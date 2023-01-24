"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколлько фильмов вы уже смотрели?");

    while(!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколлько фильмов вы уже смотрели?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false};

function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        let q1 = "";
        let q2 = "";
        while (true) {
            q1 = prompt("Один из последних просмотренных фиьмов?");
            if (q1 && q1.length <= 50) {
                break;
            } else {
                continue;
            }
        }
        q2 = prompt("На сколько оцените его?")
        personalMovieDB.movies[q1] = q2;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function myFavoriteGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

myFavoriteGenres();

function showMyDb() {
    if (personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

showMyDb();

personalMovieDB.privat = true;

showMyDb();
