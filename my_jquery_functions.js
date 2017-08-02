$( document ).ready(function() {
  var thermostat, powerSavingMessage;

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

  updateTemperature();
  updateEnergyUsage();
  updatePowerSaving();

  $("#up").click(function(){
    thermostat.increaseTemp()
    updateTemperature();
    updateEnergyUsage();
  });
  $("#down").click(function(){
    thermostat.decreaseTemp()
    updateTemperature()
    updateEnergyUsage();
  });
  $("#power-save").click(function(){
    thermostat.togglePowerSaving()
    updatePowerSaving();
    updateTemperature()
  });
  $("#reset").click(function(){
    thermostat.reset();
    updatePowerSaving();
    updateTemperature()
    updateEnergyUsage();
  });
});
