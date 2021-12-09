const btn = document.querySelector('.btn');
const evenDiv = document.getElementById('even');
const oddDiv = document.getElementById('odd');

const arrLength = 20;
let randomEvenArray = [];
let randomOddArray = [];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const compareNumbers = (a, b) => {
  return a - b;
};

const addNumbersToColumns = () => {
  randomEvenArray = [];
  randomOddArray = [];

  for (let i = 0; i < arrLength; i++) {
    let randomNumber = getRandomInt(1, 100);
    if (randomNumber % 2 === 0) {
      randomEvenArray.push(randomNumber);
    } else {
      randomOddArray.push(randomNumber);
    }
  }

  evenDiv.textContent = `${randomEvenArray.sort(compareNumbers)}`;
  oddDiv.textContent = `${randomOddArray.sort(compareNumbers)}`;
};

btn.addEventListener('click', addNumbersToColumns);
