## String
string = "bob"
puts 'The type of a string name' + string + ' is'
puts string.class
## Fixed Number
num = 34
puts 'The type of a fixed number ' + num.to_s + ' is '
puts num.class
## Float
num = 32.25
puts 'The type of a float number ' + num.to_s + ' is '
puts num.class
## Array
array = '[ 24, 15, 22, 9]'
puts 'The type of an array ' + array.to_s + ' is'
puts array.class
## Symbol
symbol = :height
puts 'The type of a symbol ' + symbol.to_s + ' is'
puts symbol.class

the_truth = true
puts 'The type of boolean ' + the_truth.to_s + ' is'
puts the_truth.class

the_lies = false
puts 'The type of boolean' + the_lies.to_s + ' is'
puts the_lies.class

hash =  { :name => 'Sally' , :weight => 160}
puts "The type of hash " + hash.to_s + " is "
puts hash.class

## To execute when finished...
## ruby type_check.rb

def type_check(variable_to_check)
  puts 'The type of ' + variable_to_check.to_s + ' is ' + variable_to_check.class
end
