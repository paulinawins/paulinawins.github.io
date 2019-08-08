import Typewriter from 'typewriter-effect/dist/core';

const welcome = document.getElementsByClassName('welcome');

var typewriter = new Typewriter('welcome', {
  strings: ['Hello', 'World'],
  autoStart: true,
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();

function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    alert("This page is still being developed :)");
}
/*
function typeWelcome(){
    var i=0;
    var txt = "Welcome! Like everything, this is a project to learn something new!";
    var speed = 50;
    if(i< txt.length){
        document.getElementsByClassName('welcome').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWelcome, speed);
    }
}
*/
