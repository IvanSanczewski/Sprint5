// import {Score} from './scores'

const API_URL_DAD_JOKES:string = 'https://icanhazdadjoke.com/';


const showJoke:any = document.querySelector('#joke');

let newJokeDiv: any = "";
let newJoke: any = "";

let allScoredJokes: {}[] = [];

// create a class to instance every rated joke
class Score {
    currentJoke: string
    score: number
    date: Date
    constructor (currentJoke: string, score: number, date: Date) {
        this.currentJoke = currentJoke;
        this.score = score;
        this.date = date;
    }
}


// delete DOM element in order to delete previous joke shown
function deletePreviousJoke(): void {
    // if statement in order to avoid console error of first try of deletion
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



function getScore(jokeScore: number) {
    let allowRating: boolean = true;


    
    if (allowRating) {
        let currentJoke = document.querySelector('#joke') as HTMLDivElement;    
        const scoredJoke: object = new Score (currentJoke.innerHTML, jokeScore , new Date);
        allScoredJokes.push(scoredJoke);
    }

    console.log(allScoredJokes);
}



