const API_URL_CN_JOKES: string = 'https://api.chucknorris.io/jokes/random';

async function loadCNJoke() {
    const apiCNRequest = await fetch(`${API_URL_CN_JOKES}`,{
        headers: {
            Accept: 'application/json',
        }
    });
    // parse data
    const apiCNData = await apiCNRequest.json();
    // create text node and append it to HTML element DOM node
    const newCNJoke = document.createTextNode(`${apiCNData.value}`);
    showJoke.appendChild(newCNJoke);
}   