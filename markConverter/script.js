// getting all elements 
let bodyEl = document.body;
let mark = document.getElementById('markInput');
let checkBtn = document.getElementById('checkBtn');

// logic for checking grade using try-catch and simple loops
checkBtn.addEventListener('click', ()=>{
  try{
      let markVal = mark.value;
      let message = document.createElement('p');
      message.classList.add('msg');
      if(markVal < 0 || markVal > 101){
        let errorMsg = document.createElement('p');
        errorMsg.textContent = 'Invalid Mark value';
        errorMsg.classList.add('errorMsg');
        errorMsg.style.color = 'red';
        bodyEl.appendChild(errorMsg);
        
        function fade(){
          errorMsg.style.display = 'none';
        }
        setTimeout(fade, 3000);
      }
      else if(markVal >= 90 && markVal <= 100)
      {
        message.textContent = 'Your Grade is A. Congratulations!';
        bodyEl.appendChild(message);
        function fade(){
          message.style.display = 'none';
        }
        setTimeout(fade, 3000);
      }
      else if(markVal >= 80 && markVal < 90)
      {
        message.textContent = 'Your Grade is B. Congratulations!';
        bodyEl.appendChild(message);
        function fade(){
          message.style.display = 'none';
        }
        setTimeout(fade, 3000);
      }
      else if(markVal >= 70 && markVal < 80)
      {
        message.textContent = 'Your Grade is C. Not bad';
        bodyEl.appendChild(message);
        function fade(){
          message.style.display = 'none';
        }
        setTimeout(fade, 3000);
      }
      else if(markVal >= 50 && markVal < 70)
      {
        message.textContent = 'Your Grade is D. You can be better!';
        bodyEl.appendChild(message);
        function fade(){
          message.style.display = 'none';
        }
        setTimeout(fade, 3000);
      }
      else if(markVal < 50){
        message.textContent = 'Your Grade is F. Better luck next time';
        bodyEl.appendChild(message);
        function fade(){
          message.style.display = 'none';
        }
        setTimeout(fade, 3000);
      }
  }  
  catch(error){
    console.log("Something went worng")
  }
})

// scrit for getting date.
const date = document.getElementById('date');

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDay() - 4;

let dateFormatted = `${year}-${month}-${day}`;
date.textContent = dateFormatted;