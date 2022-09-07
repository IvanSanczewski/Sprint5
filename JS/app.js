"use strict";
// import {Score} from './scores'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL_DAD_JOKES = 'https://icanhazdadjoke.com/';
const showJoke = document.querySelector('#joke');
let newJokeDiv = "";
let newJoke = "";
let allScoredJokes = [];
// create a class to instance every rated joke
class Score {
    constructor(currentJoke, score, date) {
        this.currentJoke = currentJoke;
        this.score = score;
        this.date = date;
    }
}
// delete DOM element in order to delete previous joke shown
function deletePreviousJoke() {
    // ??create an if statement in order to avoid console error of first try of deletion
    showJoke.removeChild(newJoke);
}
// request data from API asyncronously with a function
function loadDadJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiRequest = yield fetch(`${API_URL_DAD_JOKES}`, {
            headers: {
                Accept: "application/json",
            },
        });
        // parse data
        const apiData = yield apiRequest.json();
        // create a new div node in DOM 
        newJokeDiv = document.createElement('div');
        // create text node and append it to previous div node
        newJoke = newJokeDiv.appendChild(document.createTextNode(`${apiData.joke}`));
        // append div node in parent DOM node created in HTML
        showJoke.appendChild(newJoke);
    });
}
// function loadShape () {
//     let randomShape: number = Math.floor(Math.random() * (6 - 1) + 1);
//     //implementar switch para escoger forma
// }
// randomly generate a number (1 or 2) and call either loadDadJoke() or loadCNJoke() functions
function chooseJoke() {
    let randomJoke = Math.floor(Math.random() * (3 - 1) + 1);
    console.log(randomJoke);
    if (randomJoke === 1) {
        loadDadJoke();
    }
    else {
        loadCNJoke();
    }
    // loadShape();
}
function getScore(jokeScore) {
    let allowRating = true;
    if (allowRating) {
        let currentJoke = document.querySelector('#joke');
        const scoredJoke = new Score(currentJoke.innerHTML, jokeScore, new Date);
        allScoredJokes.push(scoredJoke);
    }
    console.log(allScoredJokes);
}
