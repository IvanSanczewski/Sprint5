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
    newJoke = document.querySelector('#joke')?.insertAdjacentHTML('afterbegin', `<div>${apiCNData.value}</div>`)
    console.log(newJoke, typeof newJoke);
    console.log(apiCNData.value, typeof apiCNData.value);
    

    // newJoke = document.createTextNode(`${apiCNData.value}`);
    // showJoke.appendChild(newJoke);
}   

