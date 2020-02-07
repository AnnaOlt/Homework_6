$(document).ready(function() {
  $("#search-weather").on("click", function(event) {
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var city = $("#city-name").val();

    // Here we construct our URL
    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial" +
      "&apikey=baf28dc2bd487831b9b7128513ed1ae7";

    //AJAX call to the weather API
    $.ajax({
      url: queryURL,
      method: "GET",
      success: function(data) {
        var showDisplay = show(data);
        $("#show-data").html(showDisplay);
        $("#city-name").val("");
      }
    }).then(function(response) {
      $("#show-data").text(JSON.stringify(response));

      $(".city").html("<p>" + response.name + " Weather</p>");
      $(".temperature").text("Temperture(C): " + response.main.temp);
      $(".humidity").text("Humidity: " + response.main.humidity + "%");
      $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
      $(".uvIndex").text("UV Index: Need seperate ajax call");
    });
  });
  return val(city);
});
