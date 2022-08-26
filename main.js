const API_URL_DAD_JOKES = 'https://icanhazdadjoke.com/';

const showJoke = document.querySelector('#joke');
console.log(5)

async function loadJoke() {
    const apiRequest = await fetch (`${API_URL_DAD_JOKES}`, {
        headers: {
            Accept: "application/json",
        },
    });
    // ??data parse needed

    const joke = await apiRequest.json();
    console.log(joke);

    const newJoke = document.createElement('div');
    newJoke.appendChild(document.createTextNode(`${joke.joke}`))
    showJoke.appendChild(newJoke);
}

