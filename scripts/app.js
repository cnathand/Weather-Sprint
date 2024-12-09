const API_KEY = "42fe14fb866c5a52fac4ac66bfaf815a"; // Your API key

// Define latitude and longitude
const lat = 37.961632; // Replace with desired latitude
const lon = -121.275604; // Replace with desired longitude

// Async function to fetch weather data
async function fetchWeather() {

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log("Monday");
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[0].main.temp}°F`)
    console.log(`highest: ${data.list[0].main.temp_max}°F`)
    console.log(`lowest: ${data.list[0].main.temp_min}°F`)


    console.log("Saturday");
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[8].main.temp}°F`)
    console.log(`highest: ${data.list[8].main.temp_max}°F`)
    console.log(`lowest: ${data.list[8].main.temp_min}°F`)

    console.log("Sunday");
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[16].main.temp}°F`)
    console.log(`highest: ${data.list[16].main.temp_max}°F`)
    console.log(`lowest: ${data.list[16].main.temp_min}°F`)

    console.log("Monday");
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[24].main.temp}°F`)
    console.log(`highest: ${data.list[24].main.temp_max}°F`)
    console.log(`lowest: ${data.list[24].main.temp_min}°F`)

    console.log("Tuesday");
    console.log("city: ", data.city.name);
    console.log(`temp: ${data.list[32].main.temp}°F`)
    console.log(`highest: ${data.list[32].main.temp_max}°F`)
    console.log(`lowest: ${data.list[32].main.temp_min}°F`)
}

fetchWeather();