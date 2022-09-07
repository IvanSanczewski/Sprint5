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
const showWeather = document.querySelector('#weather-icon');
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
        console.log(openWeatherMapData);
        // create variable for icons
        let weatherIconStart = 'https://openweathermap.org/img/wn/';
        let weatherIconEnd = '@2x.png';
        let weatherIcon = `${weatherIconStart}${openWeatherMapData.weather[0].icon}${weatherIconEnd}`;
        console.log(weatherIcon);
        // create a new div node in DOM 
        const actualWeather = document.createElement('div');
        // const actualWeatherIcon: any = actualWeather.appendChild(document.);
        // const actualWeatherIcon: Text = actualWeather.appendChild(document.createTextNode(`https://openweathermap.org/img/wn/${openWeatherMapData.weather[0].icon}@2x.png`));
        // let MOREFAKER: any = document.createElement('div');
        // const FAKE:any = MOREFAKER.appendChild(document.URL(`https://openweathermap.org/img/wn/${openWeatherMapData.weather[0].icon}@2x.png`))
        // create text node and append it to HTML element DOM node
        // const actualWeather = document.createTextNode(`${weatherIcon}`);
        // actualWeather.appendChild(weatherIcon);
        // const actualWeather = document.createElement(`${weatherIcon}`);
        // showWeather.appendChild(actualWeatherIcon); 
        // create text node for the temperature and append it to HTML element DOM node
        const actualTemp = document.createTextNode(`${(openWeatherMapData.main.temp).toFixed(0)}`);
        showTemp.appendChild(actualTemp);
    });
}
// const load: any = window.document.addEventListener("onload", loadWeather())
loadWeather();
