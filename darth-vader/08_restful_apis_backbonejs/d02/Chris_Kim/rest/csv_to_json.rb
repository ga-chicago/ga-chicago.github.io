require 'json'
require 'csv'
## ruby csv_to_json.rb input.csv output.jsonn
# exit() exit the script

puts 'csv_to_json requires two arguments'
puts '- input file (as CSV)'
puts '- output file (as JSON)'
puts 'Example: ruby csv_to_json input.csv output.json'
puts '----------------------'

# ARGV = number of arguments in the execution code in the Terminal
if ARGV.size != 2
  puts 'Error -> expecting 2 arguments'
  exit(1)
end

lines = CSV.open(ARGV[0]).readlines
keys = lines.delete lines.first

# open(arg1, arg2) where arg1 = file location, and arg2, 'w' = write access to the 2nd arg
# keys.zip binds a key from one array to a value in another array
File.open(ARGV[1], 'w') do |f|
  data = lines.map do |values|
    Hash[keys.zip(values)]
  end
  f.puts JSON.pretty_generate(data)
end
