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

const isMovieExists = movies.includes("Interstellar");

console.log(isMovieExists);


// 4. Функция, которая переворачивает массив
function reverseArray(array) {
    array.reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedMovies = reverseArray(movies);

console.log(reversedNumbers);
console.log(reversedMovies);


// массив тех комментариев, почта пользователей которых содержит ".com"
const commentsWithComEmail = comments.filter(
comment => comment.email?.includes(".com"));

console.log(commentsWithComEmail);


/*
массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2,
а те, у кого id больше 5, имели postId: 1
*/
function updatePostId(comments) {
   comments.forEach(comment => {
   comment.postId = comment.id <= 5 ? 2 : 1;});
  }

updatePostId(comments);
console.log(comments);



// массив, что бы объекты состояли только из айди и имени
const shortComments = comments.map(({ id, username }) => ({ id, username }));
console.log(shortComments);


/*
 массив, добавляем объектам свойство isInvalid и проверяем:
 если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
 */
function checkInvalidComments(comments) {
  comments.forEach(comment => {
  comment.isInvalid = (comment.body?.length || 0) > 180;});
}

checkInvalidComments(comments);
console.log(comments);