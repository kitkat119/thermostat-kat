$( document ).ready(function() {
  var thermostat, powerSavingMessage, updateTemperature, updateEnergyUsage, updatePowerSaving, energyUsageMessage, updateElements;

  thermostat = new Thermostat();
  powerSavingMessage = function() {
    return 'Power Saving Mode is: ' + thermostat.powerSaving();
  };
  energyUsageMessage = function() {
    return 'Energy usage: ' + thermostat.energyUsage();
  };
  updateTemperature = function() {
    $('#temperature').text(thermostat.temperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };
  updateEnergyUsage = function() {
    $('#energy-usage').text(energyUsageMessage());
  };
  updatePowerSaving = function() {
    $("#power-saving").text(powerSavingMessage());
  };
  updateElements = function() {
    updateTemperature();
    updateEnergyUsage();
    updatePowerSaving();
  };
updateElements();

  $("#up").click(function(){
    thermostat.increaseTemp()
    updateElements();
  });
  $("#down").click(function(){
    thermostat.decreaseTemp()
    updateElements();
  });
  $("#power-save").click(function(){
    thermostat.togglePowerSaving()
    updateElements();
  });
  $("#reset").click(function(){
    thermostat.reset();
    updateElements();
  });
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);

  });
  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=1165259d6e26ca0f8e03387e1f2da5ac';
    var units = '&units=metric';
    $.get(url + token + units, function(response) {
      $('#current-temperature').text(response.main.temp);
    });
  };
  function updateTemp() {

  }
});
