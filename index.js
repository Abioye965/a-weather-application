const inputValue = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const apiKey = "1af02e9374336bea4a82708a0c1d67b0";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  if (data.cod !== 200) {
    console.log("City not found or API issue");
    return;
  }
  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  if (data.weather[0].main === "Cloud") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main === "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main === "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  } else if (data.weather[0].main === "Rain") {
    document.querySelector(".weather-icon").src = "images/rain.png";
  } else if (data.weather[0].main === "Snow") {
    document.querySelector(".weather-icon").src = "images/snow.png";
  }
  console.log(data);
}
searchBtn.addEventListener("click", function () {
  checkWeather(inputValue.value);
});
inputValue.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    checkWeather(inputValue.value);
  }
});
