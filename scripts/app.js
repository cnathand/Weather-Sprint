const API_KEY = "42fe14fb866c5a52fac4ac66bfaf815a";


const lat = 37.961632;
const lon = -121.275604;
const cityname = 'Stockton';
const limit = '5';

const currentTemp = document.getElementById("currentTemp");
const month = document.getElementById("month");
const lowCurrent = document.getElementById("lowCurrent");
let searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")




const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
month.innerText = months[date.getMonth()];
day.innerText = `${days[date.getDay()]} ${date.getDate()}`;
day1.innerText = `${days[(date.getDay()+1)]}`;
day2.innerText = `${days[(date.getDay()+2) % 7]}`;
day3.innerText = `${days[(date.getDay()+3) % 7]}`;
day4.innerText = `${days[(date.getDay()+4) % 7]}`;
day5.innerText = `${days[(date.getDay()+5) % 7]}`;

searchBtn.addEventListener('click', function(){
    const query = searchInput.value.trim();
    if(query) {
        fetchLocation(query)
    }
    else
    {
        alert("Please enter a city name!");
    }



});

async function fetchLocation(query) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=${API_KEY}`
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    if(data.length > 0){
        const { lat, lon } = data[0];
        fetchWeather(lat,lon);
        fetchWeather1(lat,lon);
        cityName.innerText = `${data[0].name}, ${data[0].country}`
    } else
    {
        alert("Please enter a city")
    }

}


async function fetchWeather1(lat, lon) {
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
    currentImage.src = `./assets/${data.weather[0].main}.png`;

}


async function fetchWeather(lat, lon) {

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
    console.log(`${data.list[0].weather[0].main}`)

    console.log('');

    console.log(data.list[8].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[8].main.temp}°F`)
    console.log(`highest: ${data.list[8].main.temp_max}°F`)
    console.log(`lowest: ${data.list[8].main.temp_min}°F`)
    console.log(` ${data.list[8].weather[0].main}`)


    console.log('');


    console.log(data.list[16].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[16].main.temp}°F`)
    console.log(`highest: ${data.list[16].main.temp_max}°F`)
    console.log(`lowest: ${data.list[16].main.temp_min}°F`)
    console.log(`${data.list[16].weather[0].main}`)


    console.log('');


    console.log(data.list[24].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[24].main.temp}°F`)
    console.log(`highest: ${data.list[24].main.temp_max}°F`)
    console.log(`lowest: ${data.list[24].main.temp_min}°F`)
    console.log(`${data.list[24].weather[0].main}`)


    console.log('');


    console.log(data.list[32].dt_txt);
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[32].main.temp}°F`)
    console.log(`highest: ${data.list[32].main.temp_max}°F`)
    console.log(`lowest: ${data.list[32].main.temp_min}°F`)
    console.log(`${data.list[32].weather[0].main}`)

    
    day1Temp.innerText = `${data.list[0].main.temp}°F`;
    day2Temp.innerText = `${data.list[8].main.temp}°F`;
    day3Temp.innerText = `${data.list[16].main.temp}°F`;
    day4Temp.innerText = `${data.list[24].main.temp}°F`;
    day5Temp.innerText = `${data.list[32].main.temp}°F`;
    day1Image.src = `./assets/${data.list[0].weather[0].main}.png`
    day2Image.src = `./assets/${data.list[8].weather[0].main}.png`
    day3Image.src = `./assets/${data.list[16].weather[0].main}.png`
    day4Image.src = `./assets/${data.list[24].weather[0].main}.png`
    day5Image.src = `./assets/${data.list[32].weather[0].main}.png`
}




fetchLocation();

fetchWeather();

fetchWeather1();

