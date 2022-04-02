import './style.css';

import logo from './images/company.png';
import search from './images/search.svg';

const APIkey = '58fed4c0ebe3af6d3eebb42a932cea95';

let callButton = document.querySelector('button.weather');
let unitButton = document.querySelector('button.unit');
let input = document.querySelector('input');
let dataType = 'imperial';
let degrees = 'Farenheight';
let displayCity = '';

async function callWeather(lat, lon) {
    let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${dataType}`, { mode: 'cors' });
    return weather;
}

async function callCoordinates(city) {
    try {
        let coordinates = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`, { mode: 'cors' });
        let json = await coordinates.json();
        let lat = json[0].lat;
        let lon = json[0].lon;
        return { lat, lon };
    }
    catch {
        return Promise.reject('Invalid City');
    }
}

async function getWeather(city) {
    let coordinates = await callCoordinates(city);
    let response = await callWeather(coordinates.lat, coordinates.lon);
    let weather = await response.json();
    console.log(weather);
    return weather;
}

function changeUnits() {
    if (dataType === 'imperial') dataType = 'metric';
    else dataType = 'imperial';
    switch (dataType) {
        case 'imperial':
            degrees = 'Farenheight';
            break;
        case 'metric':
            degrees = 'Celsius';
            break;
    }
}

function displayWeather(weather) {
    let title = document.querySelector('h1.title');
    let temp = document.querySelector('div.weather-1');
    let feelsLike = document.querySelector('div.weather-2');
    let high = document.querySelector('div.weather-3');
    let low = document.querySelector('div.weather-4');
    let sky = document.querySelector('div.weather-5');
    title.textContent = displayCity + ' Weather';
    temp.textContent = 'Current Temperature: ' + weather.main.temp + ' ' + degrees;
    feelsLike.textContent = 'Feels Like: ' + weather.main.feels_like + ' ' + degrees;
    high.textContent = "Today's High: " + weather.main.temp_max + ' ' + degrees;
    low.textContent = "Today's Low: " + weather.main.temp_min + ' ' + degrees;
    sky.textContent = 'Cloud Coverage: ' + weather.weather[0].description;
}







callButton.addEventListener('click', event => {
    if (input.value) {
        getWeather(input.value, dataType)
            .then(output => {
                displayCity = input.value;
                displayWeather(output);
            })
            .catch(output => {
                input.setCustomValidity('Invalid City');
                input.reportValidity();
            });
    }
    else {
        input.setCustomValidity('Please enter a city');
        input.reportValidity();
    }
});

input.addEventListener('input', event => {
    event.target.setCustomValidity('');
});

unitButton.addEventListener('click', event => {
    changeUnits();
    callButton.click();
});

