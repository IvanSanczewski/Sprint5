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
    // ??create an if statement in order to avoid console error of first try of deletion
    showJoke.removeChild(newJoke);
}


// request data from API asyncronously with a function
async function loadDadJoke() {
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

function loadShape () {
    const acutalShape = document.querySelector('.shape') as HTMLImageElement | null;
    let randomShape: number = Math.floor(Math.random() * (6 - 1) + 1);
    //implementar switch para escoger forma
    switch (randomShape) {
        case 1: 
            if(acutalShape !== null){
                acutalShape.src = './MEDIA/blue_blob.svg'
            }
            break;
        case 2: 
            if(acutalShape !== null){
                acutalShape.src = './MEDIA/dark_yellow_blob.svg'
            }
            break;
        case 3: 
            if(acutalShape !== null){
                acutalShape.src = './MEDIA/fuchsia_blob.svg'
            }
            break;
        case 4: 
            if(acutalShape !== null){
                acutalShape.src = './MEDIA/green_blob.svg'
            }
            break;
        case 5: 
            if(acutalShape !== null){
                acutalShape.src = './MEDIA/medium_gray_blob.svg'
            }
            break;
    }
}





// randomly generate a number (1 or 2) and call either loadDadJoke() or loadCNJoke() functions
function chooseJoke() {
    let randomJoke: number = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(randomJoke);
    if(randomJoke === 1) {
        loadDadJoke();
    } else {
        loadCNJoke();
    }
} 


function trigger() {
    // implementar condicional para que no intente borrar al principio -->> según contenido del div
    chooseJoke();
    loadShape();
    deletePreviousJoke();
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



