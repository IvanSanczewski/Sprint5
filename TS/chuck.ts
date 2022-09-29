const API_URL_CN_JOKES: string = 'https://api.chucknorris.io/jokes/random';

// async function loadCNJoke() {
    //     const apiCNRequest = await fetch(`${API_URL_CN_JOKES}`,{
        //         headers: {
            //             Accept: 'application/json',
            //         }
            //     });
            //     // parse data
            //     const apiCNData = await apiCNRequest.json();
            
            //     // create a new div node in DOM 
            //    newJokeDiv = document.createElement('div');
            
            //     // create text node and append it to HTML element DOM node
            //     newJoke = document.createTextNode(`${apiCNData.value}`);
            //     showJoke.appendChild(newJoke);
            // }
            
            
async function loadCNJoke() {
    
    const apiCNRequest = await fetch(`${API_URL_CN_JOKES}`,{
        headers: {
            Accept: 'application/json',
        }
    });
    // parse data
    const apiCNData = await apiCNRequest.json();
    jokeDiv = `<div>${apiCNData.value}</div>`
    // newJoke = document.querySelector('#joke').innerHTML = jokeDiv;
}   

