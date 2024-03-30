//Api Key link from openweathermap.org = https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=2453fde77df331a952bc48bbd91691dd&units=metric
//Api key = 2453fde77df331a952bc48bbd91691dd

const apiKey = "2453fde77df331a952bc48bbd91691dd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        let data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const icon = document.querySelector(".weather-icon");

        if(data.weather[0].main == 'Clouds'){
        icon.src = "cloud-logo.png";
        }
        else if(data.weather[0].main == 'Clear'){
        icon.src = "clear-logo.png";
        }
        else if(data.weather[0].main == 'Rain'){
        icon.src = "rain-logo.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
        icon.src = "drizzle-logo.png";
        }
        else if(data.weather[0].main == 'Haze'){
        icon.src = "mist-logo.png";
        }
        else if(data.weather[0].main == 'Snow'){
            icon.src = "snow-logo.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

    searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})