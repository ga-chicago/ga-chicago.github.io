class RaceCar
	def initialize(name, wheels, doors, cylinders)
		puts "It goes fast"
		@name = name
		@wheels = wheels
		@doors = doors
		@cylinders = cylinders
	end

	def name
		@name
	end

	def wheels
		@wheels
	end

	def doors
		@doors
	end

	def cylinders
		@cylinders
	end

	def to_s
		puts 'This car is a ' + @name.to_s + ' with ' + @wheels.to_s + ' wheels.' 
	end
end

car = RaceCar.new('Tim\'s Turbo Turd', 8, 1, 1246)

car2 = RaceCar.new('Jerry\'s Smallpenismobile', 1.3, 800, 0.53)

puts car.name

puts car2.name

puts car2.wheels

puts car2.to_s

class Turtle
	def initialize(name, color, weapon, hats, saying)
		@name = name
		@color = color
		@weapon = weapon
		@hats = hats
		@saying = saying
	end

	def to_s
		puts "Hi, I'm #{@name} and I wear #{@hats} hats on my stupid green head. I like to hit my #{@color} butt with a #{@weapon} every morning while yelling #{@saying}!"
	end
end

bloaty = Turtle.new('Bloaty McFloaty', 'peuce', 'dry pasta', 8, 'Gobble obble in Magoo!')

bloaty.to_s