import { APIKEY } from '../scripts/enviroment.js';   


//Geo location is a built in API that allows the user to share there location apon request.

//navigator.geolocation this return geolocation object
//getCurrentPosition method lets the web app get the current position

navigator.geolocation.getCurrentPosition(success, errorFunc);
//You can think of this as an if statment if user accepts we run success else we run errorFunc

//Example of the geolocation Object below
{
    coords: {
        latitude: 32.1234;
        longitude: 13.1234;
    }
}

//If the user accepts we run success function
function success(position){
    console.log(position);
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    console.log("Our latitude: " + lat);
    console.log("Our longitude: " + long);
    console.log("We know where you are!");
    currentLocation(lat,long);
}
//If the user denies we run errorFunc
function errorFunc(error){
    console.log(error.message);
}

async function currentLocation(lat,long) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=42fe14fb866c5a52fac4ac66bfaf815a`)
    const data = await response.json();
    console.log(data);
};  

currentLocation();