"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL_CN_JOKES = 'https://api.chucknorris.io/jokes/random';
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
function loadCNJoke() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const apiCNRequest = yield fetch(`${API_URL_CN_JOKES}`, {
            headers: {
                Accept: 'application/json',
            }
        });
        // parse data
        const apiCNData = yield apiCNRequest.json();
        newJoke = (_a = document.querySelector('#joke')) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('afterbegin', `<div>${apiCNData.value}</div>`);
        console.log(newJoke, typeof newJoke);
        console.log(apiCNData.value, typeof apiCNData.value);
    });
}
