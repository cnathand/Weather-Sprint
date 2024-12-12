const API_KEY = "42fe14fb866c5a52fac4ac66bfaf815a";


const lat = 37.961632;
const lon = -121.275604;
const cityname = 'Stockton';
const limit = '5';

const currentTemp = document.getElementById("currentTemp");
const day1Temp = document.getElementById("day1Temp");
const day2Temp = document.getElementById("day2Temp");
const day3Temp = document.getElementById("day3Temp");
const day4Temp = document.getElementById("day4Temp");
const day5Temp = document.getElementById("day5Temp");
const month = document.getElementById("month");
const day1 = document.getElementById("day1");
const lowCurrent = document.getElementById("lowCurrent");

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
month.innerText = months[date.getMonth()];
day.innerText = `${days[date.getDay()]} ${date.getDate()}`;
day1.innerText = `${days[date.getDay()+1]}`
day2.innerText = `${days[date.getDay()+2]}`
day3.innerText = `${days[date.getDay()+3]}`
day4.innerText = `${days[date.getDay()+4]}`
day5.innerText = `${days[date.getDay()+5]}`


async function fetchWeather1() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
    const response = await fetch(url);
    const data= await response.json();

    console.log("today");
    console.log("city: ", data.name);
    console.log(`temp: ${data.main.temp}°F`);
    console.log(`highest: ${data.main.temp_max}°F`);
    console.log(`lowest: ${data.main.temp_min}°F`);

    console.log('');

    currentTemp.innerText = `${data.main.temp}°F`;
    lowCurrent.innerText = `Low - ${data.main.temp_min}°F`;
}


async function fetchWeather() {

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    console.log(data.list[0].dt)
    console.log(data.list[0].dt_txt);
    console.log("city location: ", data.city.name, ", ", data.city.country);
    console.log(`temp: ${data.list[0].main.temp}°F`)
    console.log(`highest: ${data.list[0].main.temp_max}°F`)
    console.log(`lowest: ${data.list[0].main.temp_min}°F`)

    console.log('');

    console.log(data.list[8].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[8].main.temp}°F`)
    console.log(`highest: ${data.list[8].main.temp_max}°F`)
    console.log(`lowest: ${data.list[8].main.temp_min}°F`)

    console.log('');


    console.log(data.list[16].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[16].main.temp}°F`)
    console.log(`highest: ${data.list[16].main.temp_max}°F`)
    console.log(`lowest: ${data.list[16].main.temp_min}°F`)

    console.log('');


    console.log(data.list[24].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[24].main.temp}°F`)
    console.log(`highest: ${data.list[24].main.temp_max}°F`)
    console.log(`lowest: ${data.list[24].main.temp_min}°F`)

    console.log('');


    console.log(data.list[32].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[32].main.temp}°F`)
    console.log(`highest: ${data.list[32].main.temp_max}°F`)
    console.log(`lowest: ${data.list[32].main.temp_min}°F`)
    
    day1Temp.innerText = `${data.list[0].main.temp}°F`;
    day2Temp.innerText = `${data.list[8].main.temp}°F`;
    day3Temp.innerText = `${data.list[16].main.temp}°F`;
    day4Temp.innerText = `${data.list[24].main.temp}°F`;
    day5Temp.innerText = `${data.list[32].main.temp}°F`;
}


async function fetchLocation() {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=${limit}&appid=${API_KEY}`
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

fetchLocation();

fetchWeather();

fetchWeather1();

