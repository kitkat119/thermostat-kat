function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  this._temperature += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  if(this._temperature > 10) { this._temperature -= 1; }
};

Thermostat.prototype.powerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.togglePowerSaving = function() {
  this._powerSaving = !this._powerSaving;
};
