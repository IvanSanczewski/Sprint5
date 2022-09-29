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
// const showJoke:any = document.querySelector('#joke');
// let newJokeDiv: any = "";
let newJoke = "";
let jokeDiv = "";
let allScoredJokes = [];
// create a class to instance every rated joke
class Score {
    constructor(currentJoke, score, date) {
        this.currentJoke = currentJoke;
        this.score = score;
        this.date = date;
    }
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
        jokeDiv = `<div>${apiData.joke}</div>`;
        newJoke = document.querySelector('#joke').innerHTML = jokeDiv;
    });
}
function loadShape() {
    const acutalShape = document.querySelector('.shape');
    let randomShape = Math.floor(Math.random() * (6 - 1) + 1);
    //implementar switch para escoger forma
    switch (randomShape) {
        case 1:
            if (acutalShape !== null) {
                acutalShape.src = './MEDIA/blue_blob.svg';
            }
            break;
        case 2:
            if (acutalShape !== null) {
                acutalShape.src = './MEDIA/dark_yellow_blob.svg';
            }
            break;
        case 3:
            if (acutalShape !== null) {
                acutalShape.src = './MEDIA/fuchsia_blob.svg';
            }
            break;
        case 4:
            if (acutalShape !== null) {
                acutalShape.src = './MEDIA/green_blob.svg';
            }
            break;
        case 5:
            if (acutalShape !== null) {
                acutalShape.src = './MEDIA/medium_gray_blob.svg';
            }
            break;
    }
}
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
}
function trigger() {
    chooseJoke();
    loadShape();
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
// const triggerBtn: HTMLButtonElement | null = document.querySelector('jokeBtn')
const triggerBtn = document.querySelector('#jokeBtn');
triggerBtn.addEventListener('click', trigger);
