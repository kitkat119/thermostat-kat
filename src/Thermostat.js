function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  this._temperature += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  this._temperature -= 1;
};
