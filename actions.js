import React from 'react';


function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    window.open("http://paulinawins.com/projects/");
}

//Stateful Variable
const [firstClick, setClick] = React.useState(false);

const punny = () => {

    const jokeapi ='https://icanhazdadjoke.com/';
    const joke  = document.createElement('p');
    joke.setAttribute('class', 'jokes');

    fetch(jokeapi, {
        method:'get',
        headers: {
            Accept:'application/json'
        },
        responseType:'json'
    })
    .then(res => res.json())
    .then(data => {
        const buttons = document.getElementById('buttons');
        if(firstClick){
            buttons.removeChild(buttons.lastChild);
        }
        joke.textContent = data.joke;
        buttons.appendChild(joke);
        setClick(true); 
    })
    .catch( e=>
        console.log("The joke api isn't working properly. Dads are sad. Error:"+ e)
    )

}

