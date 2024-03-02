// Using JS for smooth fading in and animations
const about = document.getElementById('aboutMe');
const project = document.getElementById('projects');

function fade(){
  const aboutPos = about.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (aboutPos < screenPos){
    about.style.opacity = '1';
    about.style.transform = 'translateY(0px)'
  }
}
function fadeForProject(){
  const projectPos = project.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.3;

  if (projectPos < screenPos){
    project.style.opacity = '1';
    project.style.transform = 'translateY(0px)'
  }
}
window.addEventListener('scroll', fade);
window.addEventListener('scroll', fadeForProject);

// script for getting date.
const date = document.getElementById('date');

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDay() - 4;

let dateFormatted = `${year}-${month}-${day}`;
date.textContent = dateFormatted;
