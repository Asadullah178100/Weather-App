// b4db485d7c4c485fa6d84351232508

// http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=London&aqi=no

const form = document.querySelector("#form");
const city = document.querySelector("#city");
const card = document.querySelector("#card");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  axios(
    `http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`
  )
  .then((res) => {
    console.log(res.data);
    card.innerHTML = `
    
    `;
  })
  .catch((err) => {
    console.log("error===>", err);
  });
});