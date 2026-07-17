function showWeather(city,
  temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Istanbul', 27);



const LIGHT_SPEED = 299792458

function checkSpeed(speed) {
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed < LIGHT_SPEED) {
    console.log('Субсветовая скорость');
  } else {
    console.log('Скорость света');
  }
}

checkSpeed(300792458);
checkSpeed(299792457);
checkSpeed(299792458);



let product = 'iPhone 16';
let price = 1600;

function buyProduct(product) {
  if (product >= price) {
    console.log(`${"iPhone 16"} приобретён. Спасибо за покупку!`)
  } else {
    console.log(`Вам не хватает ${price -product}$, пополните баланс`)
  }
}

buyProduct(2000);
buyProduct(1200);



function sayHello() {
  console.log("Привет!")
}

sayHello();

let cheetahSpeed = 120;
let userName = "Metkiy";
let age = 19;