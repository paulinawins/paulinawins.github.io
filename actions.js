function gotolinkedin(){
    window.open ("https://www.linkedin.com/in/nguyennpaulina");
}

function projectPage(){
    window.open("http://paulinawins.com/projects/");
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
    }
    )
    .then(res => res.json())
    .then(data => {
        const details = document.getElementById('buttons');
        //console.log(data.joke);
        if(clicked>0){
            details.removeChild(details.lastChild);
        }
        joke.textContent = data.joke;
        details.appendChild(joke);
        clicked++; 
    })
    .catch(
        console.log("The joke api isn't working properly. Dads are sad")
    )

}

/*
const greeting  = document.createElement('p');
greeting.setAttribute('class', 'lead');
greeting.textContent = `Feel free to explore!`;
details.appendChild(greeting);
*/
