happy_place = Object.new

def happy_place.set_name(name)
	@name_of_happy_place = name
end	

def happy_place.set_location(lat,lon) 
	@latitude = lat
	@longitude = lon
end

def happy_place.get_name
	@name_of_happy_place
end

def happy_place.get_location
	return @latitude.to_s + "," + @longitude.to_s
end
