# adding methods to an object
# the hard way

# new object
cats = Object.new

# add the :meow method
cats.define_singleton_method(:meow) do
	puts 'meow meow'
end

# again!
beth = Object.new

beth.define_singleton_method(:is_awesome?) do
	return true
end

## the easy way

fish = Object.new

def fish.swim
	puts 'just keep swimming...'
end

fish.swim

def fish.eat
	puts 'those tetra flakes suck'
	puts 'live bait, plz'
end

fish.eat

def fish.glurp
	puts 'glurp *bubble* glurp'
end

fish.glurp
