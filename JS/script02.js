"use strict";

const numberOfFilms = +prompt("Сколлько фильмов вы уже смотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false};
    
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

//let count = 0;
//
//while (count < 2) {
//    let q1 = "";
//    let q2 = "";
//    while (true) {
//        q1 = prompt("Один из последних просмотренных фиьмов?");
//        if (q1 && q1.length <= 50) {
//            break;
//        } else {
//            continue;
//        }
//    }
//    q2 = prompt("На сколько оцените его?")
//    personalMovieDB.movies[q1] = q2;
//    count++;
//}

//let count = 0;
//
//do {
//    let q1 = "";
//    let q2 = "";
//    while (true) {
//        q1 = prompt("Один из последних просмотренных фиьмов?");
//        if (q1 && q1.length <= 50) {
//            break;
//        } else {
//            continue;
//        }
//    }
//    q2 = prompt("На сколько оцените его?")
//    personalMovieDB.movies[q1] = q2;
//    count++;
//} while(count < 2);

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);
