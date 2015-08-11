happy_place = Object.new

def happy_place.set_name(name)
	@name = name
	puts 'My name is now ' + @name.to_s
end

happy_place.set_name('turdfart')

def happy_place.get_name
	puts 'My name is ' + @name
end

def happy_place.set_location(lat, lon)
	@latitude = lat
	@longitude = lon
end

happy_place.get_name

happy_place.set_location(23.4, 84.12)

def happy_place.get_location
	puts 'Secret location: ' + @latitude.to_s + ', ' + @longitude.to_s
end

happy_place.get_location