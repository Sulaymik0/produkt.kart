// покраска  всех карточек

const changeColorCardButton = document.querySelector('#change-Color-all-card');
const greenColorHash = '#43c160';
const blueColorHash = '#4A90E2';

changeColorCardButton.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach((card) => {
    card.style.backgroundColor = greenColorHash;
    });
});

// покраска первой карточки

const firstProductContainers = document.querySelector('.card');
const changeColorFirstCardButton = document.querySelector('#change-Color-first-card');

changeColorFirstCardButton.addEventListener ('click', () => {
firstProductContainers.style.backgroundColor = blueColorHash
});

// открытие страницы Google.com

const openGoogleButton = document.querySelector('#open-google');
const googleURL = 'https://google.com';
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle()  {
  const answer = confirm('вы действительно хотите google?');

  if (answer === true) {
    window.open('https://google.com')
} else {
    return;
}
  }


// вывод консоль лог
const outputlogButton = document.querySelector('#output-console-log');
outputlogButton.addEventListener('click', () => outputConsoleLog('дз №7'))

function outputConsoleLog(message) {
    console.log(message)
    alert('10')
}

outputConsoleLog('дз №7')