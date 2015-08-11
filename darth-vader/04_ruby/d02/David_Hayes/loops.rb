rockets = [ 'Apollo' , 'Titan' , 'V2' , 'Mercury' ]
superheroes = [ 'Batman' , 'Ant-Man' , 'Captain America' , 'Green Lantern' , 'Wonder Woman']

rockets.each do |rocket|
  puts 'Launch ' + rocket
end
puts 'sample is ' + rockets.send(:sample)
puts 'last is ' + rockets.send(:last)
# puts 'count is ' + rockets.send(:count)

superheroes.each do |character|
  puts 'This is a job for ' + character
end
puts 'sample is ' + superheroes.send(:sample)
puts 'first is' + superheroes.send(:first)


def things_i_like(*args)
  args.each do |arg|
    puts 'I like ' + arg
  end
end

things_i_like('piano','cycilng','movies','coding')

def favorite_cities(*args)
  args.each do |arg|
    puts 'I love to visit ' + arg
  end
end

favorite_cities('Seattle','Chicago','Colorado Springs','Omaha','Dallas','New York City')

cars = Object.new
planes = Object.new

cars.define_singleton_method(:vroom) do
  puts "movin' on down the road"
end

planes.define_singleton_method(:liftoff) do
  puts "up up and away"
end

cars.vroom
planes.liftoff

fish = Object.new
def fish.eat
  puts 'chomp chomp chomp'
end

def fish.glurp
  puts 'glurp glurp glurp'
end

def fish.swim
  puts "Movin' through the water, look at me!"
end

fish.eat
fish.glurp
fish.swim

happy_place = Object.new

def happy_place.set_name(name)
  @name_of_happy_place = name
end

def happy_place.set_location(lat,lon)
  @latitude = lat
  @longitude = lon
end
