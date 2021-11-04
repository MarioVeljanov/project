"use strict.";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Колку филмови имаш изгледано?");
    
        while ( personalMovieDB.count == '' ||  personalMovieDB.count == null || isNaN( personalMovieDB.count)) {
            alert('Внеси број');
            personalMovieDB.counts = +prompt("Колку филмови имаш изгледано?");
        }
        
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count <= 10) {
            alert(`Имаш изгледано ${personalMovieDB.count} филмови- тоа е доволно малку.`);
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert(`Имаш изгледано ${personalMovieDB.count} филмови- ти си класичен гледач.`);
        } else if (personalMovieDB.count > 30) {
            alert(`Имаш изгледано ${personalMovieDB.count} филмови- ти си киноман.`);
        } else {
            alert("Има некаква грешка при внесување на податоци за количина на изгледани филмови");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let x;
            x = prompt(`Ваш омилен жанр под бројот ${i + 1}`);
            if(x == '' || x == null) {
                alert("Внесовте не соодветни податоци");
                i--;
            } else {
                personalMovieDB.genres[i] = x;
            }

        }
        personalMovieDB.genres.forEach(function(item, i) {
            alert(`Ваш омилен жанр под бројот ${i + 1} е: ${item}` );
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};




















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


/* Callback function */


/* function learnJs(lang, callback) {
    console.log(`I study ${lang}`);
    callback();
}

learnJs('JavaScript', function(){
    console.log('I passed this lesson');
}); */


/* const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test');
    }
};
options.makeTest();

const {border, bg} = options.colors */

//console.log(Object.keys(options).length); //Должина на објект. Object.keys()- го претвара објектот во масив после што може да се определи
                                          // негова должина.


/* delete options.name;
console.log(options); */

/* let counter = 0;
for (let i in options) {
    if (typeof(options[i]) === 'object') {
        for ( let key in options[i]) {
            console.log(`Propretis ${key} has the meaning ${options[i][key]}`);
            counter++;
        }
    } else {
        console.log(`Propretis ${i} has the meaning ${options[i]}`);
        counter++;
    }
    
}
console.log(counter); */

/* const arr = [1, 3, 7, 13];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} inside array ${arr}`);
}); */

//arr.pop();    /* бришење на елемент */
//arr.push(10);   /* Додавање на елемнт */
//console.log(arr);

/* console.log( null || 0 && 3 || 4 );
console.log(0 && 3);
console.log(typeof([ ] + 1 + 3));
console.log(typeof([ ]));
console.log(2 && 1 && null && 0 && undefined);
let number = 3;
let newNumber = 2 * ++number;
console.log(newNumber);

const d = [1, 2, 3],
      e = [1, 2, 3];
console.log(d == e);

console.log(0 || "" || 2 || undefined || true || false); */


/* let a = 5,
    b = a;


b += 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
 */
/* const copy = obj;

copy.a = 10;
console.log(copy);
console.log(obj); */

/* function copy(mainObj) {
    let objCopy = {};
    
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

const clon = Object.assign({}, add);
clon.d = 10;
console.log(add);
console.log(clon);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[0] = 'kjsdkfjn';
console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
    
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

const array = ['a', 'b'];
const newArr = [...array];

const q = {
    one: 1,
    two: 2
};
const newQ = {...q}; */