names = ['john', 'bob', 'kevin', 'smith', 'richard']

names.each do |name|
	puts name + ' is a dick.'
end

furniture = ['desk', 'chair', 'toilet', 'small dog']

furniture.each do |thing|
	puts 'Don\'t sit on the ' + thing + '!'
end

big_ass_array = (1..20).to_a

puts big_ass_array.send(:public_methods)

puts big_ass_array.send(:display)

def stuff_yo(*args)
	args.each do |arg|
		puts arg
	end
end

stuff_yo('a', 'b', 'c')

def sum_all_args(*args)
	result = 0
	args.each do |arg|
		result += arg
	end
	puts "the total is: #{result}"
end

sum_all_args(1,2,3,4,5,6,7,8)

def things_i_like(*things)
	things.each do |thing|
		puts thing.to_s + ' makes me wanna dance!'
	end
end

things_i_like('tacos', 'short dresses', 'pasta', 'being in siena')

def favourite_cities(*cities)
	cities.each do |city|
		puts 'let\'s burn down ' + city.to_s
	end
end

favourite_cities('Chicago', 'Pittsburgh', 'Hoboken')

car = Object.new

car.define_singleton_method(:crash) do
	puts "bang"
end

car.crash

plane = Object.new

plane.define_singleton_method(:dump_the_latrine) do
	puts 'blue ice is real! poo from the sky!!!'
end

plane.dump_the_latrine

def plane.fly(place)
	puts 'the plane is flying to ' + place.to_s
end

plane.fly('jamaica')

cat = Object.new

def cat.piss(furniture)
	puts 'the cat just pissed on the ' + furniture.to_s
end

fish = Object.new

def fish.eat
	puts 'Ths fish is eating NOM NOM NOM'
end

def fish.glurp
	puts 'Ths fish is glurping'
	3.times do
		puts "0"
	end
end


def fish.swim
	puts 'The fish swam up your butt'
end

fish.eat

fish.glurp

fish.swim

def fish.learn_trick(trick)
	@trick = trick
	puts 'I learned to ' + @trick
end

fish.learn_trick('piss on your face')






