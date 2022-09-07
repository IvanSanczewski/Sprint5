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
const API_URL_WEATHER_VILNIUS = 'https://api.openweathermap.org/data/2.5/weather?lat=54.687157&lon=25.279652&units=metric&appid=e17c07313af0930b505c798498867fc8';
const showWeather = document.querySelector('#weather');
const showTemp = document.querySelector('#temp');
function loadWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const openWeatherMapRequest = yield fetch(`${API_URL_WEATHER_VILNIUS}`, {
            headers: {
                Accept: "application/json",
            },
        });
        // parse data
        const openWeatherMapData = yield openWeatherMapRequest.json();
        // create 3 variables for icons <<-- a bit more clear to read than the used option in line 25 in TS file
        // let weatherIconStart:string = 'https://openweathermap.org/img/wn/'
        // let weatherIconEnd:string = '@2x.png'
        // let weatherIcon:string = `${weatherIconStart}${openWeatherMapData.weather[0].icon}${weatherIconEnd}`
        // variable containing the weather icon URL
        let weatherIcon = `https://openweathermap.org/img/wn/${openWeatherMapData.weather[0].icon}@2x.png`;
        // inserting URL into the src attribute
        const actualWeatherImage = document.getElementById('weather-icon');
        if (actualWeatherImage !== null) {
            actualWeatherImage.src = weatherIcon;
        }
        // create text node for the temperature and append it to HTML element DOM node
        const actualTemp = document.createTextNode(`${(openWeatherMapData.main.temp).toFixed(0)}`);
        showTemp.appendChild(actualTemp);
    });
}
// const load: any = window.document.addEventListener("onload", loadWeather())
loadWeather();
