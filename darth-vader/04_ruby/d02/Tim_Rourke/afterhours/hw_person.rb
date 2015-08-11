class Person
	def initialize(name, age, catch_phrase, hats, smells_like)
		@name = name
		@age = age
		@catch_phrase = catch_phrase
		@hats = hats
		@smells_like = smells_like
	end

	def to_s
		"#{@name} is #{@age} years old and wears #{@hats} hats that smell like #{@smells_like} at all times while screaming \"#{@catch_phrase}!\" at other people's kids."
	end
end

dude = Person.new('Cracker Pee', 947, 'SIM SIM SINGARINGALINGTING', 2, 'scrambled eggs')

dude2 = Person.new('Lerbert', 3, 'Let us go to Target?', 9, 'fear')

puts dude.to_s

puts dude2.to_s