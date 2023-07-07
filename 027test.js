//1
document.getElementById("block1").style.borderRadius = "15px";

//2

//это функция которая будет запускаться при срабатывании события. 

//3


//4

document.getElementById('btn').addEventListener('click', showMessage);

function showMessage() {
  console.log('Запуск');
}


//5



//6
function showMessage() {
    console.log('Запуск');
  }
  
  function hideBlock() {
    console.log('Спрятать');
  }
  
  document.getElementById('btn').addEventListener('click', showMessage);
  document.getElementById('btn').addEventListener('click', hideBlock);
  

//7


document.querySelector('#block').addEventListener('click', mmFunction, true);
document.querySelector('#txt').addEventListener('click', mmFunction, true);

//8

document.querySelector('#block').addEventListener('click', function(event) {
    console.log('div');
  }, true);
  
  document.querySelector('#txt').addEventListener('click', function(event) {
    console.log('p');
  }, true);

  //9

const block = document.getElementById('block');
const parent = block.parentElement;
console.log(parent);


//10

const blockone = document.querySelector('.blockone');
console.log(blockone.firstElementChild);

//11

const block2 = document.querySelector('last-child');
console.log(block2);

  
//12


const block1 = document.querySelector('.block1');
const nextElement = block1.nextElementSibling;
console.log(nextElement);

//13

