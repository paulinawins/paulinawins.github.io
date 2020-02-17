const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=ur9LoDK0IzbODykVfCE26OKy2toK6tUZnkFnjyv3';

fetch(nasaUrl, {
    method: 'get',
    responseType: 'json'
})
.then(res => res.json())
.then(data => {
    //let picUrl = data.hdurl;
    console.log("pic url:" + data);
    
    /*const picContainer = document.getElementsByClassName('jumbotron');
    const picElement = document.createElement('div');
    picElement.
    picContainer.appendChild(picElement);
    */
})
.catch( e => console.log("error with nasa pic"))