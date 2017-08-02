'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MAX_LOW_ENERGY_USAGE = 17;
  this._temperature = 20;
  this._powerSaving = true;
  this._maxTemp = function() {
    if(this._powerSaving) { return this.MAX_TEMP_PSM_ON; }
    return this.MAX_TEMP_PSM_OFF;
  };
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if(this._temperature < this._maxTemp()) { this._temperature += 1; }
};

Thermostat.prototype.decreaseTemp = function() {
  if(this._temperature > this.MINIMUM_TEMPERATURE) { this._temperature -= 1; }
};

Thermostat.prototype.powerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.togglePowerSaving = function() {
  this._powerSaving = !this._powerSaving;
  if(this._temperature > this._maxTemp()) { this.resetPowerSaving(); }
};

Thermostat.prototype.reset = function() {
  this._temperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.resetPowerSaving = function() {
  this._temperature = this.MAX_TEMP_PSM_ON
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature() <= this.MAX_LOW_ENERGY_USAGE) { return "low-usage"; }
  else if(this.temperature() < this.MAX_TEMP_PSM_ON) { return "medium-usage"; }
  return "high-usage";
};
