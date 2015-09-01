require 'csv'
require 'json'

 puts 'csv_to_json expect 2 arguments:'
 puts '- input file (as CVS)'
 puts '- oupt file (as JSON)'

if ARGV.size != 2
  puts 'We were expecting two arguments'
  puts 'Example: ruby cvs_to_json.rb input.csv output.json'
  exit(1)
end

lines = CSV.open(ARGV[0].readlines
keys = lines.delete lines.first

File.open(ARGV[1], 'w') do |f|
  data = lines.map do |values|
    Hash[keys.zip(values)]
  end
  f.puts JSON.pretty_generate(data)
end
