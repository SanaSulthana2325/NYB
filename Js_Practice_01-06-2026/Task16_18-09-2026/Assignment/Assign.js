
// Get HTML elements
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weather = document.getElementById("weather");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const historyList = document.getElementById("historyList");


// Store searched cities
let cities =
    JSON.parse(localStorage.getItem("cities")) || [];


// ---------------------------------------
// SEARCH CITY
// ---------------------------------------

async function searchCity() {

    const city = cityInput.value.trim();

    // Empty state
    if (city === "") {

        weather.innerHTML = "";
        error.textContent = "Please enter a city name.";

        return;
    }

    try {

        // Loading state
        loading.style.display = "block";
        error.textContent = "";
        weather.innerHTML = "";


        // First API: Get city coordinates
        const locationResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
        );


        if (!locationResponse.ok) {
            throw new Error("Location API failed");
        }


        const locationData =
            await locationResponse.json();


        // Check if city exists
        if (!locationData.results) {

            throw new Error("City not found");

        }


        // Get city information
        const location = locationData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;


        // Second API: Get weather
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`
        );


        if (!weatherResponse.ok) {
            throw new Error("Weather API failed");
        }


        const weatherData =
            await weatherResponse.json();


        // Display weather
        displayWeather(
            location,
            weatherData.current
        );


        // Save city
        saveCity(location.name);


    } catch (err) {

        error.textContent =
            "City not found. Please try again.";

        console.log(err);

    } finally {

        // Hide loading
        loading.style.display = "none";

    }
}


// ---------------------------------------
// DISPLAY WEATHER
// ---------------------------------------

function displayWeather(city, currentWeather) {

    weather.innerHTML = `

        <div class="weather-card">

            <h2>${city.name}</h2>

            <p>
                🌡️ Temperature:
                ${currentWeather.temperature_2m}°C
            </p>

            <p>
                💨 Wind Speed:
                ${currentWeather.wind_speed_10m} km/h
            </p>

        </div>

    `;
}


// ---------------------------------------
// SAVE CITY TO LOCAL STORAGE
// ---------------------------------------

function saveCity(cityName) {

    // Avoid duplicate cities
    if (!cities.includes(cityName)) {

        cities.push(cityName);

    }


    // Keep only last 5 cities
    cities = cities.slice(-5);


    localStorage.setItem(
        "cities",
        JSON.stringify(cities)
    );


    displayHistory();
}


// ---------------------------------------
// DISPLAY SEARCH HISTORY
// ---------------------------------------

function displayHistory() {

    historyList.innerHTML = "";


    // Empty state
    if (cities.length === 0) {

        historyList.innerHTML =
            "<p>No recent searches</p>";

        return;

    }


    cities.forEach(city => {

        const button =
            document.createElement("button");

        button.textContent = city;


        button.addEventListener(
            "click",
            () => {

                cityInput.value = city;

                searchCity();

            }
        );


        historyList.appendChild(button);

    });

}


// ---------------------------------------
// SEARCH BUTTON EVENT
// ---------------------------------------

searchBtn.addEventListener(
    "click",
    searchCity
);


// ---------------------------------------
// ENTER KEY EVENT
// ---------------------------------------

cityInput.addEventListener(
    "keypress",
    event => {

        if (event.key === "Enter") {

            searchCity();

        }

    }
);


// ---------------------------------------
// DISPLAY SAVED HISTORY
// ---------------------------------------

displayHistory();

