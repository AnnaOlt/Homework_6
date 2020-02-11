// $(document).ready(function() {
$("#search-weather").on("click", function() {
  event.preventDefault();
  //     // event.preventDefault() can be used to prevent an event's default behavior.
  //     // Here, it prevents the submit button from trying to submit a form when clicked

  //     // Here we grab the text from the input box

  var city = $("#city-name").val();

  // Here we construct our URL
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&apikey=baf28dc2bd487831b9b7128513ed1ae7";

  //AJAX call to the weather API
  $.ajax({
    url: queryURL,
    method: "GET",
    response: "p={}"
  }).then(function(response) {
    console.log(response);

    $(".city").text(response.name + " Weather");
    $(".temperature").text("Temperture(K): " + response.main.temp);
    $(".humidity").text("Humidity: " + response.main.humidity + "%");
    $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
    $(".uvIndex").text("UV Index: " + response.coord);
  });
});
