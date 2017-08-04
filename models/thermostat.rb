class Thermostat
  attr_reader :temp

def initialize(temp)
  @temp = temp
end

def self.create(temp)
  @thermostat = Thermostat.new(temp)
end

def self.instance
  @thermostat
end
end
