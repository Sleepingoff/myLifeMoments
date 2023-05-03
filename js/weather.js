const API_key = "a37c09862afebcdbce4c5f450a8d4caf";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
  fetch(url)
    .then((response) => response.json())
    .then((date) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
      city.innerText = date.name;
      weather.innerText = date.weather[0].main;
    });
}
function onGeoError() {
  alert("Can't find you");
}

//위치정보 불러오기
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
