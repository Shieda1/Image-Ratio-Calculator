// https://www.omnicalculator.com/other/image-ratio

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const percentagechangeRadio = document.getElementById('percentagechangeRadio');
const firstimageheightRadio = document.getElementById('firstimageheightRadio');
const secondimageheightRadio = document.getElementById('secondimageheightRadio');

let percentagechange;
let firstimageheight = v1;
let secondimageheight = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

percentagechangeRadio.addEventListener('click', function() {
  variable1.textContent = 'First image height';
  variable2.textContent = 'Second image height';
  firstimageheight = v1;
  secondimageheight = v2;
  result.textContent = '';
});

firstimageheightRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage change';
  variable2.textContent = 'Second image height';
  percentagechange = v1;
  secondimageheight = v2;
  result.textContent = '';
});

secondimageheightRadio.addEventListener('click', function() {
  variable1.textContent = 'Percentage change';
  variable2.textContent = 'First image height';
  percentagechange = v1;
  firstimageheight = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(percentagechangeRadio.checked)
    result.textContent = `Percentage change = ${computepercentagechange().toFixed(2)}`;

  else if(firstimageheightRadio.checked)
    result.textContent = `First image height = ${computefirstimageheight().toFixed(2)}`;

  else if(secondimageheightRadio.checked)
    result.textContent = `Second image height = ${computesecondimageheight().toFixed(2)}`;
})

// calculation

function computepercentagechange() {
  return (Number(secondimageheight.value) / Number(firstimageheight.value)) * 100;
}

function computefirstimageheight() {
  return Number(secondimageheight.value) / (Number(percentagechange.value) / 100);
}

function computesecondimageheight() {
  return (Number(percentagechange.value) / 100) * Number(firstimageheight.value);
}