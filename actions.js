import TypeIt from 'typeit';

const welcome = document.getElementsByClassName('welcome');

function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    alert("This page is still being developed :)");
}

new TypeIt('#myElement', {
  strings: "This will be typed!"
}).go();

new TypeIt('#simpleUsage', {
  strings: 'This is a simple string.',
  speed: 50,
  waitUntilVisible: true
}).go();