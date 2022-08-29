"use strict";
// const API_URL_WEATHER: string = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
// const vilniusLatitude: number = 54.687157;
// const vilniusLongitude: number = 25.279652;
// const apiKey: string = 'e17c07313af0930b505c798498867fc8'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL_WEATHER_VILNIUS = 'https://api.openweathermap.org/data/2.5/weather?lat=54.687157&lon=25.279652&appid=e17c07313af0930b505c798498867fc8';
const showWeather = document.querySelector('#weather');
function loadWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const openWeatherMapRequest = yield fetch(`${API_URL_WEATHER_VILNIUS}`, {
            headers: {
                Accept: "application/json",
            },
        });
        // parse data
        const openWeatherMapData = yield openWeatherMapRequest.json();
        console.log(openWeatherMapData);
        //create text node and append it to HTML element DOM node
        const actualWeather = document.createTextNode(`Today will be ${openWeatherMapData.weather[0].main} in ${openWeatherMapData.name}`);
        showWeather.appendChild(actualWeather);
    });
}
// const load: any = window.document.addEventListener("onload", loadWeather())
loadWeather();
