const API_URL_DAD_JOKES:string = 'https://icanhazdadjoke.com/';

const showJoke:any = document.querySelector('#joke');
let newJokeDiv: any = "";
let newJoke: any = "";

// delete DOM element in order to delete previous joke shown
function deletePreviousJoke(): void {
    showJoke.removeChild(newJoke);
}

// request data from API asyncronously with a function
async function loadJoke() {
    const apiRequest = await fetch(`${API_URL_DAD_JOKES}`, {
        headers: {
            Accept: "application/json",
        },
    });
    // parse data
    const apiData = await apiRequest.json();

    // create a new div node in DOM 
    newJokeDiv = document.createElement('div');

    // create text node and append it to previous div node
    newJoke = newJokeDiv.appendChild(document.createTextNode(`${apiData.joke}`));

    // append div node in parent DOM node created in HTML
    showJoke.appendChild(newJoke);

}    
    

