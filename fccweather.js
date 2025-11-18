//freecodeCamp Weather App Project
    const weatherIcon = document.getElementById("weather-icon");
    const mainTemperature = document.getElementById("main-temperature");
    const feelsLike = document.getElementById("feels-like");
    const humidity = document.getElementById("humidity");
    const windGust = document.getElementById("wind-gust");
    const wind = document.getElementById("wind");
    const weatherMain = document.getElementById("weather-main");
    const cityInput = document.getElementById("city-input").value;
    const city = document.getElementById("location");
    const getWeatherBtn = document.getElementById("get-weather-btn");


async function getWeather(city){
    const api = "https://weather-proxy.freecodecamp.rocks/api/city/<CITY>".replace("<CITY>",city);
    
    try {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    return data;
    } catch (error) {
      console.error(`Error fetching weather data: ${error}`);
    }
}

async function showWeather(city){
    const weatherData = await getWeather(city);
    console.log(weatherData);
    if(!weatherData){
        console.log("Something went wrong, please try again later");
        return;
    }else if(cityInput === "paris"){
        alert("Something went wrong, please try again later");
        return;
    }


    }


// Event listener for button click
getWeatherBtn.addEventListener("click", () => {
    showWeather(city);
});

.
 

const sum = (num1, num2) => num1 + num2;
console.log(sum(0, 0) + 10);