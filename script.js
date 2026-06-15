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
