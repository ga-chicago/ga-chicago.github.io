puts 'hey man - happy friday! hawaiian shirt day!'
# console.log for ruby!
# pitfall: logs out only to the server, or terminal

# creating or instantiating a new instance of Object
happiness = Object.new
# query the object's id
happiness.object_id

# adding a setter (aka mutator) to an object
def happiness.set_friends(friends_array)
  @friends = friends_array
  puts '@friends now equals ' + @friends.to_s
end

# how do we get them?
# I need to create a getter
def happiness.get_friends
  # ruby returns the last line in a method
  @friends
  # let's be descriptive!
  @friends.to_s + ' are here to hang out!'
end

# methods...
# methods are just functions owned by objects
def say_hello(statement)
  'We have important information! ' + statement.to_s
end

# wouldn't it be nice to blueprint out the object?
class Happy
  def initialize(name, friends, awesomeness)

    # instance variable
    @name = name
    @friends = friends
    @awesomeness = awesomeness

  end

  def to_s
    'Happy has ' + @name.to_s + ' and has friends such as ' + @friends.to_s
  end

end

# arrays!
my_array = ['This land', 'Dinosaurs', 'Fireflies']

my_array.each do |thing|
  puts 'my array contains many things.. such as ' + thing.to_s
end

# hashes!
my_hash_list = {
  :name => 'James',
  :age => 31,
  :message => 'Happy Friday'
}

my_hash_list.each do |item|
  puts item
end

really_happy = Happy.new
really_happy.to_s

really_happy.send(:to_s)
