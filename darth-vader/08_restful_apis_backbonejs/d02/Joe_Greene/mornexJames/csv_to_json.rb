require 'csv'
require 'json'

## ruby csv_to_json.rb inpit.csv output.json

##ARGV is an array used via CLI for arguments

puts 'csv_to_json.rb expects two arguments:'
puts '- input file (as CSV)'
puts '-output file (as JSON)'
puts 'Example: ruby csv_to_json.rb input.csv output.json'
## a csv file

if ARGV.size !=2
  puts 'Whoops! We were expecting 2 arguments.'
  exit(1)
end

#want csv to open the first line and read the keys
lines = CSV.open(ARGV[0]).readlines
keys = lines.delete lines.first
#keys are the first line removing them, and reorganizing into array

#opening up file in 2nd argument w= write to file
File.open(ARGV[1], 'w') do |f|
  data = lines.map do |values|
    Hash[keys.zip(values)]
  end
  f.puts JSON.pretty_generate(data)
  #pretty_generate does 
end

#tool to find your own csvs and parse them yourselves
