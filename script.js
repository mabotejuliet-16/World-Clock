setInterval(function () {
  let jnbElement = document.querySelector("#jnb");
  let jnbDateElement = jnbElement.querySelector(".date");
  let jnbTimeElement = jnbElement.querySelector(".time");
  let jnbTime = moment().tz("Africa/Johannesburg");

  jnbDateElement.innerHTML = jnbTime.format("MMMM Do YYYY");
  jnbTimeElement.innerHTML = jnbTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

setInterval(function () {
  let msuElement = document.querySelector("#msu");
  let msuDateElement = msuElement.querySelector(".date");
  let msuTimeElement = msuElement.querySelector(".time");
  let msuTime = moment().tz("Africa/Maseru");

  msuDateElement.innerHTML = msuTime.format("MMMM Do YYYY");
  msuTimeElement.innerHTML = msuTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A",
    )}</small></div>
  </div>
  `;
}

let citiesSelectElement = document.querySelector("#african-cities");
citiesSelectElement.addEventListener("change", updateCity);
