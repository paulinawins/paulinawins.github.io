function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    window.open("http://paulinawins.com/projects/", "_self");
}

let clicked = 0

function punny(){

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
        if(clicked>0){
            buttons.removeChild(buttons.lastChild);
        }
        joke.textContent = data.joke;
        buttons.appendChild(joke);
        clicked++; 
    })
    .catch( e=>
        console.log("The joke api isn't working properly. Dads are sad. Error:"+ e)
    )

}

