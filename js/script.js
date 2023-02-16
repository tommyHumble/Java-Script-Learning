/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Delete ADDS
const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(item => {
    item.remove();
});

// Change genre
const genre = document.querySelectorAll('.promo__genre')[0];
genre.textContent = 'ДРАМА';

// Change BG
const bg = document.querySelectorAll('.promo__bg')[0];
bg.style.cssText = 'background-image: url(../img/bg.jpg)';

// Films list
const sortedFilms = [...movieDB.movies.map(item => item.toUpperCase()).sort()];
const list = document.querySelector('.promo__interactive-list');
list.innerHTML = "";

for (let i=0; i<sortedFilms.length; i++) {
    const listItem = document.createElement('li');
    const delIcon = document.createElement('div');
    listItem.textContent = `${i + 1}. ${sortedFilms[i]}`;
    listItem.classList.add('promo__interactive-item');
    delIcon.classList.add('delete');
    listItem.append(delIcon);
    list.append(listItem);
}