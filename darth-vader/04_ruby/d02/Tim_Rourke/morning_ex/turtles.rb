class Turtle
	def initialize(name, color, weapon, saying)
		@name = name
		@color = color
		@weapon = weapon
		@saying = saying
	end

	def name
		@name
	end

	def color
		@color
	end

	def weapon
		@weapon
	end

	def saying
		@saying
	end

	def say_stuff
		puts @saying
	end
end

timmy = Turtle.new('Tim', 'red', 'sticks', 'Shut up dude')

puts timmy.color
timmy.say_stuff
