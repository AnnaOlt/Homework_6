// $("button").on("click", function() {

//   var weather = $(this).attr("weather-data");
//   var queryURL =
//     "https://api.openweathermap.org/data/2.5/forecast" +
//     weather +
//     "&apikey=7c4adbbce0f10b09e2c30be38f8cc0d6";

//         });
//           console.log(response);

// var APIKey = "7c4adbbce0f10b09e2c30be38f8cc0d6";

// var queryURL =
//   "https://api.openweathermap.org/data/2.5/weather" +
//   "q=Londom,UK&units=imperial&appid=" +
//   APIKey;

// $.ajax({
//   queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(queryURL);
//   console.log(response);

// API key
var APIKey = "baf28dc2bd487831b9b7128513ed1ae7";

// URL to query the database
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?" +
  "q=London,UK&units=imperial&appid=" +
  APIKey;

// AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Log the queryURL
  console.log(queryURL);

  // Log the resulting object
  console.log(response);

  $(".city").html("<p>" + response.name + " Weather</p>");
  $(".temperature").text("Temperture(C): " + response.main.temp);
  $(".humidity").text("Humidity: " + response.main.humidity + "%");
  $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
  $(".uvIndex").text("UV Index: Need seperate ajax call");
});

// var APIKeyUV = "7870887c26e1e43a711df1e8353f1636",

// $.ajax({
//   url: "https://api.openuv.io/api/v1/uv?" + "lat=-31.1&lng=56.4" + APIKeyUV,
//   method: "GET"
// }).then(function(response) {
//   console.log(queryURL);
//   console.log(response);
// });
