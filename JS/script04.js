"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколлько фильмов вы уже смотрели?");
        while(!personalMovieDB.count || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколлько фильмов вы уже смотрели?");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    myFavoriteGenres: function () {
        for (let i = 0; i < 3; i++) {
            while (true) {
                let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
                if (genre && genre.trim().length !== 0) {
                    personalMovieDB.genres[i] = genre;
                    break;
                } else {
                    continue;
                }
            }
        }
        personalMovieDB.genres.forEach((item, indx) => {
            console.log(`Любимый жанр #${indx + 1} - это ${item}\n`);
        });
    },
    showMyDb: function () {
        if (personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.myFavoriteGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDb();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDb();
