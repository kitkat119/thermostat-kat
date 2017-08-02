describe('Thermostat', function() {
  var thermostat, defaultTemp, minimumTemp, maxPowerSavingTemp, arbitraryIncrease;
  beforeEach(function() {
    thermostat = new Thermostat();
    defaultTemp = 20;
    minimumTemp = 10;
    maximumTemp = 32;
    maxPowerSavingTemp = 25;
    arbitraryIncrease = 5
  });

  it('is created with temperature 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(defaultTemp);
  });
  it('can increase the temperature by 1 degree', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(defaultTemp + 1);
  });
  it('can decrease the temperature by 1 degree', function() {
    thermostat.decreaseTemp();
    expect(thermostat.temperature()).toEqual(defaultTemp - 1);
  });
  it('does not reduce temperature below 10', function() {
    while(thermostat.temperature() > minimumTemp) {
      thermostat.decreaseTemp();
    }
    thermostat.decreaseTemp();
    expect(thermostat.temperature()).toEqual(minimumTemp);
  });
  describe('reset', function() {
    it('returns the temperature to 20', function() {
      for(i = 1; i <= arbitraryIncrease; i++) {
        thermostat.increaseTemp();
      }
      thermostat.reset()
      expect(thermostat.temperature()).toEqual(defaultTemp)
    });
  });
  describe('power saving', function() {
    it('is on by default', function() {
      expect(thermostat.powerSaving()).toBeTruthy();
    });
    it('can be turned off', function() {
      thermostat.togglePowerSaving();
      expect(thermostat.powerSaving()).toBeFalsy();
    });
    it('can be turned on again', function() {
      for(var i = 1; i <= 2; i++) {
        thermostat.togglePowerSaving();
      }
      expect(thermostat.powerSaving()).toBeTruthy();
    });
    it('restricts temp to max 25', function() {
      while(thermostat.temperature() < maxPowerSavingTemp) {
        thermostat.increaseTemp();
      }
      thermostat.increaseTemp();
      expect(thermostat.temperature()).toEqual(maxPowerSavingTemp);
    });
    it('being turned on reduces temperature to 25 if temperature is higher', function() {
      thermostat.togglePowerSaving();
      while(thermostat.temperature() < maximumTemp) {
        thermostat.increaseTemp();
      }
      thermostat.togglePowerSaving();
      expect(thermostat.temperature()).toEqual(25);
    });
  });
  describe('power saving is off', function() {
    it('restricts temp to max 32', function() {
      thermostat.togglePowerSaving();
      while(thermostat.temperature() < maximumTemp) {
        thermostat.increaseTemp();
      }
      thermostat.increaseTemp();
      expect(thermostat.temperature()).toEqual(maximumTemp);
    });
  });
});
