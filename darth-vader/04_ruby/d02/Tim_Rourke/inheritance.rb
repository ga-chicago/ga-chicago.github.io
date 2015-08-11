class SaturnV
	def initialize
		@name = 'Saturn V'
		@fuel = 'Liquid H2'
		@mission = 'go to moon'
	end

	def take_off
		return "We're going to the MOOON bitches!"
	end

	def to_s
		return @name + " has a mission to " + @mission
	end
end

class SLS < SaturnV
	def initialize
		@name = 'SLS'
		@fuel = 'Liquid H2'
		@mission = 'To make it to Mars and Europa'
	end
end

class Enterprise < SLS
	def initialize
		@name = 'Enterprise'
		@fuel = 'ridiculous nonsense'
		@mission = 'to make money off of nerds'
	end
end

rocket = SaturnV.new

sls_rocket = SLS.new

enterprise = Enterprise.new

puts rocket.to_s

puts sls_rocket.to_s

puts enterprise.to_s