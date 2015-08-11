# the SPLAT *
# usage with args
# just like the JS function's arguments array

def headache(*args)
	args.each do |argument|
		puts "This argument: " + argument.to_s
	end
end

def favourite_cities(*args) 
	
	args.each do |city|
		puts 'I love the following city: ' + city
	end

end
