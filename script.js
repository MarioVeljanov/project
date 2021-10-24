"use strict.";

const numberOfFilms = prompt("Колку филмови имаш изгледано?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count <= 10) {
    alert(`Имаш изгледано ${personalMovieDB.count} филмови- тоа е доволно малку.`);
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    alert(`Имаш изгледано ${personalMovieDB.count} филмови- ти си класичен гледач.`);
} else if (personalMovieDB.count > 30) {
    alert(`Имаш изгледано ${personalMovieDB.count} филмови- ти си киноман.`);
} else {
    alert("Има некаква грешка при внесување на податоци за количина на изгледани филмови");
}

console.log(personalMovieDB);


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
