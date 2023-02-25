// let name = 'Анастасия';
// name = 'Максим';
//
// console.log(name);

// let str = 'Я хочу быть большим и сильным';
//
// console.log(str.length);

// let a = '15';
// let b = 15;
// let c = 10;
//
// console.log(a + b + c);
// console.log(b + c + a);
//потому что переменная а является строкой , а остальные переменные числами

// let str = 'Я хочу быть большим и сильным';
//
// console.log(str.length);

// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
//
// console.log(arr[1][0]);

// let object = {name: 'Ivan', age:35, gender: 'male',  job:'web-developer' };
//
// for (let key in object){
//     console.log(`значение ключа ${key} является ${object[key]}`)
// }

// let surname = 'Cеребров';
//
// console.log(surname='Сереброфф');

// let str = 'я люблю торт';
//
// console.log(str.endsWith('торт'));

// let str = '10223040';
//
// console.log(str.split('').reverse().join(''));


// let age = 18;
//
// console.log(`Мне ${age} лет`);

// let str = "  asdasdsadsadsadsadc";
//
// console.log(str.slice(2).split(''));

// let arr = [2,1,3,4,5];
//
// console.log(arr.sort());
//
// arr.splice(3, 0,'a','b','c');
//
// console.log(arr);

// let str = 'Мой город самый лучший город в России!';
//
// console.log(str.indexOf('город'));

// let str = 'eloquent';
//
// console.log(str.slice(1,-1));

// let a = 9;
//
// let b = 9;
//
// if (a === b){
//     console.log('same')
// }else if (a > b){
//     console.log(a + b)
// }else {
//     console.log(a - b)
// }


// let arr = [12, '12', true, undefined, 'Ivan', 35];
//
// for (let a of arr){
//     console.log(`Массив содержит в себе  элемент ${a}`)
// }
// let arr = [5, 10, 20, 30, 15];
// let max= arr[0];
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > max){
//        max = arr[i]
//     }
// }
// console.log(max);

// let a = 0;
//
// for (let i = 1; i <= 50;i++){
//     if (i % 2 === 0){
//        a++
//     }
// }
// console.log(a);

// let a = 0;
//
// for (let i = 1; i <= 100;i++){
//     if (i % 2 !== 0){
//        a+=i
//     }
// }
// console.log(a);


// let arr = [5, 10, 3, 8, 1];
//
// let max= arr[0];
//
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < max){
//        max = arr[i]
//     }
// }
// console.log(max);


// let obj = { a: 4, b: 10, c: 3 };
// let min = obj.a;
//
// for (let value in obj){
//     if (obj[value] < min){
//         min = obj[value]
//     }
// }
// console.log(min);

// let obj = { a: 5, b: 10, c: 3 };
//
// let newObj = {};
//
//
// for (let key in obj){
//     newObj[obj[key]] = key
// }
//
// console.log(newObj);


// let arr = ['apple', 'banana', 'orange', 'kiwi'];
//
// arr.splice(0, 2, 'aabb');
//
// console.log(arr);


// let arr = ['apple', 'banana', 'orange', 'kiwi'];
//
// arr.pop();
//
// arr.push('aa');
// console.log(arr);


// let arr = ['apple', 'banana', 'orange', 'kiwi','dada', 'bb', 'jokerke','pepe'];
//
// arr.splice(3,5);
//
// console.log(arr);

// let arr = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
//
// arr.splice(-2,2);
//
// console.log(arr);

// let str = 'level';
//
// let newStr = [...str].reverse().join('');
//
// if (str === newStr){
//     console.log(true)
// }else {
//     console.log(false)
// }
