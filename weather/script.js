// Getting all elements
let dropDown = document.getElementById('convert');
let inputTemp = document.getElementById('temperature');
let convertBtn = document.getElementById('convertBtn');
let bodyEl = document.body;

// converting to celsius
function toCelsius(temp){
  let celsius = (temp - 32) * 5/9;
  return celsius;
}

// converting to kelvin
let toKelvin = function(temp){
  let kelvin = temp + 273.15;
  return kelvin;
}

// EventListener for button
let msg = document.createElement('p');
convertBtn.addEventListener('click', ()=>{
  
  msg.classList.add('msg');
  let dropVal = dropDown.value;
  let inputVal = parseInt(inputTemp.value);

  if(dropVal == 'toCelsius'){
    let celsius = toCelsius(inputVal);
    let rounded = celsius.toFixed(1)
    msg.textContent = `Celsius : ${rounded} C`;
    bodyEl.appendChild(msg);
  }
  if(dropVal == 'tokelvin'){
    let kelvin = toKelvin(inputVal);
    let rounded = kelvin.toFixed(1);
    msg.textContent = `Kelvin : ${rounded} K`;
    bodyEl.appendChild(msg);
  }
})

// script for getting date.
const date = document.getElementById('date');

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDay() - 4;

let dateFormatted = `${year}-${month}-${day}`;
date.textContent = dateFormatted;
