teams = ['red wings', 'avalanche','blackhawks']
locations = ['detroit', 'colorado', 'chicago']
locations.each do |place|
  puts place
end

teams.each do |team|
  puts team
end

def favourite_cities(*args)
    args.each do |city|
      puts " I love the following city: " + city
    end
end
favourite_cities('bay city', 'chicago', 'houghton')

##singleton Methods
cars = Object.new
cars.define_singleton_method(:drive) do
  puts "vorooooooom"
end

plane = Object.new
plan.define_singleton_method(:fly) do
  puts "woooooooshhh"
end

car.drive
plane.fly

def cats.hiss
  puts "hisss"
end
cats.hiss

fish = Object.new
def fish.eat
  puts "nom nom nom"
end

def fish.glurp
  puts "Im breathing."
end

def fish.swim
  puts "just keep swimming"
end

fish.eat
fish.glurp
fish.swim

happy_place = Object.new

def happy_place.set_name(name)
  @name_ofhappy_place = name
end

def happy_place.set_location(lat,lon)
    @latitude = lat
    @longitude = long
end

def happy_place.get_name
    @name_ofhappy_place
end

def happy_place.get_location
    @latitude.to_s + ',' + @longitude.to_s
end
