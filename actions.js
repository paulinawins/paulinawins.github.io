import TypeIt from 'typeit';

const welcome = document.getElementsByClassName('welcome');

function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    alert("This page is still being developed :)");
}

const instance = new TypeIt('#myElement', {
  strings: "This will be typed!"
}).go();
