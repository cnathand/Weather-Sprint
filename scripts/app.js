const API_KEY = "42fe14fb866c5a52fac4ac66bfaf815a";


const lat = 37.961632;
const lon = -121.275604;

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

}


async function fetchWeather() {

    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    console.log(data.list[0].dt*1000)
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
}




fetchWeather();

fetchWeather1();