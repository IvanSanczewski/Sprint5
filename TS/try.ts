// const API_URL_WEATHER: string = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
// const vilniusLatitude: number = 54.687157;
// const vilniusLongitude: number = 25.279652;
// const apiKey: string = 'e17c07313af0930b505c798498867fc8'

const API_URL_WEATHER_VILNIUS: string = 'https://api.openweathermap.org/data/2.5/weather?lat=54.687157&lon=25.279652&appid=e17c07313af0930b505c798498867fc8'
const showWeather:any = document.querySelector('#weather');

async function loadWeather() {
    const openWeatherMapRequest = await fetch (`${API_URL_WEATHER_VILNIUS}`, {
        headers: {
            Accept: "application/json",
        },
    });
    // parse data
    const openWeatherMapData = await openWeatherMapRequest.json();
    console.log(openWeatherMapData);
    //create text node and append it to HTML element DOM node
    const actualWeather = document.createTextNode(`Today will be ${openWeatherMapData.weather[0].main} in ${openWeatherMapData.name}`);
    showWeather.appendChild(actualWeather); 
}
// const load: any = window.document.addEventListener("onload", loadWeather())
loadWeather();
