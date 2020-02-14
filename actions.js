function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    //alert("This page is still being developed :)");
    window.open("http://paulinawins.com/projects/");
}

const details = document.getElementById('welcome');
const greeting  = document.createElement('p');
greeting.setAttribute('class', 'lead');
greeting.textContent = `Feel free to explore!`;

details.appendChild(greeting);

