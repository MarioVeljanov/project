"use strict.";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Колку филмови имаш изгледано?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        alert('Внеси број');
        numberOfFilms = +prompt("Колку филмови имаш изгледано?");
    }
    
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        const a = prompt("Еден од последни гледани филмови?"),
              b = prompt("Колку поени ке му дадеш?");
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            alert("Внесе не соодветни податоци. Обиди се повторно.");
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count <= 10) {
        alert(`Имаш изгледано ${personalMovieDB.count} филмови- тоа е доволно малку.`);
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert(`Имаш изгледано ${personalMovieDB.count} филмови- ти си класичен гледач.`);
    } else if (personalMovieDB.count > 30) {
        alert(`Имаш изгледано ${personalMovieDB.count} филмови- ти си киноман.`);
    } else {
        alert("Има некаква грешка при внесување на податоци за количина на изгледани филмови");
    }
}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш омилен жанр под бројот ${i + 1}`);
    }
}
writeYourGenres();
showMyDB();





/* let num = 50;

while (num <= 55) {
    console.log(num);
    num++; 
}; 

 do {
    console.log(num);
    num++;
}
while (num <= 55); 

for (let i =1; i < 8; i++) {
    console.log(i);
    num++;
}
console.log(num);
 */

/* function showFristMessage(text) {
    console.log(text);
};

showFristMessage('hello');

function calc(a, b) {
    return(a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 3));

const logger = function() {
    console.log("Hello")
};

logger();

const cal = (a, b) => { return a + b }; */

/* const str = "TeSt";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str); */

/* const fruit = "Some fruit";
console.log(fruit.indexOf("i")); */

/* const logg = "Hello world";
console.log(logg.slice(6));
console.log(logg.substring());      /* не прима негативни аргументи(ги прави нула) */
/*console.log(logg.substr(6, 3));    /* првиот аргумент е почеток од кој симбол (w), а вториот кажува колку симболи ке се отсечат */


/* const num = 12.2; */
/* console.log(Math.round(num)); */       /* 12 */           

/* onst test = "12.2px"; */
//console.log(parseInt(test));        /* Го заокружува бројот и го претвара во int */
//console.log(parseFloat(test));      /* Го остава децимален ама го претвара во број (float) */

