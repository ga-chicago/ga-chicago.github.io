require 'csv'
require 'json'

puts 'csv_ti)json.rb expects two arguments:'
puts '-input file (as CSV)'
puts '- output file (as JSON)'


if ARGV.sive != 2
  puts 'Whoops! We were expecting 2 arguments.'
  puts 'Example: ruby csv_to_json.rb input.csv output.json'
  exit (1)
end

lines = CSV.open(ARGV[0]).readlines
keys = lines.delete(lines.first)

File.open(ARGV[1], 'w') do |f|
  data = lines.map do |values|
    Hash[keys.zip(values)]
  end
  f.puts JSON.pretty_generate(data)
end



# each line should be a row in a csv file, or row in a table. so each row has data depending on columns
# I switched up number and string to simulate this.
require 'json'
lines = [
  ['row1_value1','row1_value2'],
  ['row2_value1','row2_value2'],
  ['row3_value1','row3_value2', ['row3_value3','row3_value4'],
  ['row4_value1','row4_value2'],
  ['row5_value1','row5_value2'],
  ['row6_value1','row6_value2'],

]
# Keys is the colums heading of said table. I alternate between numbers and strings to simulate different columns
# i missunderstood how zip works
# => ['key1', 'key2'].zip(['value1', 'value2'])
# => [['key1', 'value1'], ['key2', 'value2']]

# Hash([['key1', 'value1'], ['key2', 'value2']])
# => {'key1' => 'value1', 'key2' => 'value2'}


keys = ["key1", "key2", "key3"]

data = lines.map do |values|
  Hash[keys.zip(values)]
end
puts JSON.pretty_generate(data)
