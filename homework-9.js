import { comments } from "./comments.js";


// 2. Массив чисел от 1 до 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersFromFive = numbers.filter(number => number >= 5);

console.log(numbersFromFive);


// 3. Массив строк и проверка наличия элемента
const movies = [
    "Avatar",
    "Titanic",
    "Interstellar",
    "Inception",
    "Gladiator"
];

const movieExists = movies.includes("Interstellar");

console.log(movieExists);


// 4. Функция, которая переворачивает массив
function reverseArray(array) {
    return array.reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedMovies = reverseArray(movies);

console.log(reversedNumbers);
console.log(reversedMovies);


// Вывели в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const omments = comments.filter(comment => comment.email?.includes('.com'));
console.log(comments);



/*
Перебрали массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2,
а те, у кого id больше 5, имели postId: 1
*/
comments.forEach(comment => {
  comment.postId = comment.id <= 5 ? 2 : 1;
});
console.log(comments);



//Перебрали массив, что бы объекты состояли только из айди и имени
const shortComments = comments.map(({ id, username }) => ({ id, username }));
console.log(shortComments);


/*
Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
 если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
 */
comments.forEach(comment => {
  comment.isInvalid = (comment.body?.length || comment.body?.length || 0) > 180;
});
console.log(comments);