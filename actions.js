const welcome = document.getElementsByClassName('welcome');

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
