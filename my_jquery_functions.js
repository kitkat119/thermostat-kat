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
});
