function Thermostat() {
  this._temperature = 20;
  this._powerSaving = true;
  this._maxTemp = function() {
    if(this._powerSaving) { return 25; }
    return 32;
  };
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemp = function() {
  if(this._temperature < this._maxTemp()) { this._temperature += 1; }
};

Thermostat.prototype.decreaseTemp = function() {
  if(this._temperature > 10) { this._temperature -= 1; }
};

Thermostat.prototype.powerSaving = function() {
  return this._powerSaving;
};

Thermostat.prototype.togglePowerSaving = function() {
  this._powerSaving = !this._powerSaving;
  if(this._temperature > this._maxTemp()) { this.resetPowerSaving(); }
};

Thermostat.prototype.reset = function() {
  this._temperature = 20
};

Thermostat.prototype.resetPowerSaving = function() {
  this._temperature = 25
};
