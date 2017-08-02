describe('Thermostat', function() {
  var thermostat, defaultTemp;
  beforeEach(function() {
    thermostat = new Thermostat();
    defaultTemp = 20;
  });

  it('is created with temperature 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(defaultTemp);
  });
  it('can increase the temperature by 1 degree', function() {
    thermostat.increaseTemp();
    expect(thermostat.temperature()).toEqual(defaultTemp + 1);
  });
});
