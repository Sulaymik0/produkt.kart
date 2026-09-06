import { productCards } from "./productСards.js";

const productContainer = document.querySelector(".bosslist");
const template = document.querySelector("#card-template");

// 1. Используем reduce()
// Ключ — название продукта
// Значение — описание продукта

const productDescriptions = productCards.reduce((acc, product) => {acc.push({
  [product.name]: product.description
  });

  return acc;}, []);

console.log(productDescriptions);


// 2. Получаем количество карточек через prompt

function getAmountOfCards() {
const amountOfCards = prompt("Сколько карточек отобразить? От 1 до 5");

if (amountOfCards >= 1 && amountOfCards <= 5) {
return Number(amountOfCards);}

return null;}


// 3. Создаём карточки
function renderCards(cards) {
  productContainer.innerHTML = "";

  cards.forEach((product) => {
    const card = template.content.cloneNode(true);

    card.querySelector(".card_image").src = `./images/${product.photo}.png`;

    card.querySelector(".card_image").alt = product.name;

    card.querySelector(".info_category").textContent =
      product.category;

    card.querySelector(".subtitle_name").textContent =
      product.name;

    card.querySelector(".card_description").textContent =
      product.description;

    card.querySelector(".card_price").textContent =
      product.price;

    card.querySelector(".money").textContent = " ₽";


    // Добавляем компоненты

    const substances = card.querySelector(".substances");

    product.components.forEach((component) => {
      const li = document.createElement("li");

      li.textContent = component;
      substances.append(li);
    });

    productContainer.append(card);
    });
}


// 4. Получаем количество карточек

const amountOfCards = getAmountOfCards();


// 5. Выводим нужное количество карточек

if (amountOfCards) {
  renderCards(productCards.slice(0, amountOfCards));
}