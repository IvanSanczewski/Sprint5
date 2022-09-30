// import {Score} from './scores'
const API_URL_DAD_JOKES:string = 'https://icanhazdadjoke.com/';

let firstShapeGreen: boolean = true;

let newJoke: any = "";
let jokeDiv: any = "";

let allowRating: boolean = true;
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

// request data from API asyncronously with a function
async function loadDadJoke() {
    const apiRequest = await fetch(`${API_URL_DAD_JOKES}`, {
        headers: {
            Accept: "application/json",
        },
    });
    // parse data
    const apiDadData = await apiRequest.json();
    jokeDiv = `<div>${apiDadData.joke}</div>`
    // newJoke = document.querySelector('#joke').innerHTML = jokeDiv;
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
    chooseJoke();
    allowRating = true;
    console.log(firstShapeGreen);
    
    if (firstShapeGreen) {
        firstShapeGreen = false;
    } else {
        loadShape();
    }
}

function getScore(jokeScore: number) {
    if (allowRating) {
        let currentJoke = document.querySelector('#joke') as HTMLDivElement;
        const scoredJoke: object = new Score (currentJoke.innerHTML, jokeScore , new Date);
        allScoredJokes.push(scoredJoke);
        allowRating = false;
    } else {
        console.log('Same joke and ve rated just once');
    }
    console.log(allScoredJokes);
}
// const triggerBtn: HTMLButtonElement | null = document.querySelector('jokeBtn')
const triggerBtn: any = document.querySelector('#jokeBtn')
triggerBtn.addEventListener('click', trigger)



