const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=ur9LoDK0IzbODykVfCE26OKy2toK6tUZnkFnjyv3';

fetch(nasaUrl)
.then(res => res.json())
.then(data => {
    let picUrl = data.hdurl;
    console.log(picUrl);
    
    /*const picContainer = document.getElementsByClassName('jumbotron');
    const picElement = document.createElement('div');
    picElement.
    picContainer.appendChild(picElement);
    */
})