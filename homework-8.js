// объект с личной информацией
const person = {
  name: "Sulayman",
  surname: "Ushurov",
  age: 19,
  country: "Turkey",
  city: "Istambul",
  email: "ushurovmetkiysulik@gmail.com"
}
console.log(person);



// информация автомобиля
const car = {
  brand: "Dodge Challenger",
  model: "SRT Hellcat",
  year: 2008,
  color: "black",
  engine: "6.2",
  transmission: "automatic",
}
  car.owner = person;

console.log(car);
console.log(car.owner.name);



// мксимальная скорасть
function ensureMaxSpeed(car) {
  if (car.hasOwnProperty("maxSpeed"))
    return;

  car.maxSpeed = 390;
}

console.log(ensureMaxSpeed(car));



// #6 модель
function showProperty(obj, property) {

console.log(obj[property]);
}


//№7 массив
const products = ["молоко", "хлеб", "мясо", "сыр",];
console.log(products)



// массив книг
const books = [
  {
     name: "100 великих людей ислама",
     author: "Джихад ат-Турбани",
     year: "2010",
     genre: "история",
 },

  {
    name: "Гарри Поттер и филосовский камень",
    author: "Дж. К. Ролинг",
    year: "1997",
    genre: "фентази",
 },

  {
    name: "Властилин колец",
    author: "Дж. Р. Р. Толкин",
    year: "1954",
    genre: "фентази"
 }
];

books.push({
    name: "Архиологи",
    author: "Вячеслав Ставецкий",
    year: "2026",
    genre: "Архиология",
});

console.log(books)



// массив вселеной
const onePieceBooks = [
  {
    name: "One Piece: East Blue",
     author: "Эйитиро Ода",
     year: "1997",
     genre: "Манга",
 },

  {
    name: "One Piece: Alabasta",
     author: "Эйитиро Ода",
     year: "",
     genre: "Манга",
 },

  {
    name: "One Piece: Wano",
     author: "Эйитиро Ода",
     year: "2018",
     genre: "Манга",
 }
];

const allBooks =
[...books, ...onePieceBooks];

console.log(allBooks);


// №10 название книги
const bookNames = books.map(book =>
  book.name);
console.log(bookNames);