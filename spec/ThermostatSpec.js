describe('Thermostat', function() {
  var thermostat, defaultTemp, minimumTemp;
  beforeEach(function() {
    thermostat = new Thermostat();
    defaultTemp = 20;
    minimumTemp = 10;
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
  });
});
