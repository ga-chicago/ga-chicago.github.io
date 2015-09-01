require 'csv'
require 'json'

## ruby csv_to_json.rb input.csv output.json

## ARGV is an array used via CLI for arguments

puts 'csv_to_json.rb expects two arguments:'
puts '- input file (as CSV)'
puts '- output file (as JSON)'
puts 'Example: ruby csv_to_json.rb input.csv output.json'

if ARGV.size != 2
  puts 'Whoops! We were expecting 2 arguments.'
  exit(1)
end

lines = CSV.open(ARGV[0]).readlines
keys = lines.delete lines.first

File.open(ARGV[1], 'w') do |f|
  data = lines.map do |values|
    Hash[keys.zip(values)]
  end
  f.puts JSON.pretty_generate(data)
end
