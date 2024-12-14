import { API_KEY } from "./enviroment.js";

const lat = 37.961632;
const lon = -121.275604;
const cityname = "Stockton";
const limit = "5";

const currentTemp = document.getElementById("currentTemp");
const month = document.getElementById("month");
const lowCurrent = document.getElementById("lowCurrent");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const recentList = document.getElementById("recent-list");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
month.innerText = months[date.getMonth()];
day.innerText = `${days[date.getDay()]} ${date.getDate()}`;
day1.innerText = `${days[(date.getDay() + 1) % 7]}`;
day2.innerText = `${days[(date.getDay() + 2) % 7]}`;
day3.innerText = `${days[(date.getDay() + 3) % 7]}`;
day4.innerText = `${days[(date.getDay() + 4) % 7]}`;
day5.innerText = `${days[(date.getDay() + 5) % 7]}`;

function saveFavorite(userInput) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(userInput)) {
        favorites.push(userInput);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    displayFavorites();
}

function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritesList = document.getElementById("fav-save");

    favoritesList.innerHTML = "";

    favorites.forEach((userInput) => {
        const listItem = document.createElement("li");
        listItem.textContent = userInput;

        const removeBtn = document.createElement("a");
        removeBtn.textContent = "-";
        removeBtn.className = "btn";
        removeBtn.addEventListener("click", () => {
            removeFavorite(userInput);
        });

        listItem.appendChild(removeBtn);
        favoritesList.appendChild(listItem);
    });
}

function removeFavorite(city) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter((fav) => fav !== city);
    localStorage.setItem("favorites", JSON.stringify(favorites)); 
    displayFavorites(); 
}

function saveCity(userInput) {
    localStorage.setItem("lastCity", userInput);

    let recentCity = JSON.parse(localStorage.getItem("recentCity")) || [];

    if (!recentCity.includes(userInput)) {
        recentCity.unshift(userInput);
    }

    if (recentCity.length > 5) {
        recentCity.pop();
    }

    localStorage.setItem("recentCity", JSON.stringify(recentCity));
    displayRecent();
}

function displayRecent() {
    const recentCity = JSON.parse(localStorage.getItem("recentCity")) || [];
    recentList.innerHTML = "";

    recentCity.forEach((userInput) => {
        const listItem = document.createElement("li");
        listItem.textContent = userInput;

        const favoriteBtn = document.createElement("button");
        favoriteBtn.textContent = "+";
        favoriteBtn.className = "btn";
        favoriteBtn.addEventListener("click", () => {
            saveFavorite(userInput);
        });

        listItem.addEventListener("click", () => {
            fetchLocation(userInput);
        });

        listItem.appendChild(favoriteBtn);
        recentList.appendChild(listItem);
    });
}

function getLastCity() {
    return localStorage.getItem("lastCity");
}

searchBtn.addEventListener("click", function () {
    const userInput = searchInput.value.trim();
    if (userInput) {
        fetchLocation(userInput);
        searchInput.value = "";
    } else {
        alert("Please enter a city name!");
    }
});

window.addEventListener("load", () => {
    const lastCity = getLastCity();
    if (lastCity) {
        fetchLocation(lastCity);
    }
    displayRecent();
    displayFavorites();
});

async function fetchLocation(userInput) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=${limit}&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.length > 0) {
        const { lat, lon } = data[0];
        fetchWeather(lat, lon);
        fetchWeather1(lat, lon);
        cityName.innerText = `${data[0].name}, ${data[0].country}`;
    } else {
        alert("City not found. Please try again.");
    }

    saveCity(userInput);
}

async function fetchWeather1(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    currentTemp.innerText = `${data.main.temp}°F`;
    lowCurrent.innerText = `Low - ${data.main.temp_min}°F`;
    currentImage.src = `./assets/${data.weather[0].main}.png`;
}

async function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    day1Temp.innerText = `${data.list[0].main.temp}°F`;
    day2Temp.innerText = `${data.list[8].main.temp}°F`;
    day3Temp.innerText = `${data.list[16].main.temp}°F`;
    day4Temp.innerText = `${data.list[24].main.temp}°F`;
    day5Temp.innerText = `${data.list[32].main.temp}°F`;

    day1Image.src = `./assets/${data.list[0].weather[0].main}.png`;
    day2Image.src = `./assets/${data.list[8].weather[0].main}.png`;
    day3Image.src = `./assets/${data.list[16].weather[0].main}.png`;
    day4Image.src = `./assets/${data.list[24].weather[0].main}.png`;
    day5Image.src = `./assets/${data.list[32].weather[0].main}.png`;
}
