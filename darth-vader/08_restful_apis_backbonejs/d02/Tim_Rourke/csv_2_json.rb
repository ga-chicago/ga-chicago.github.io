require 'json'
require 'csv'

if ARGV.size < 2
	print 'Welcome to the CSV parser.'
	puts 	'- input file as CSV.'
	puts 	'- output file as JSON.'
	puts 	'Example: ruby csv_to_json.rb input.csv output.json'
	puts 	'Please type in the CSV filename you would like to parse:'
	csv_input = $stdin.gets.chomp
	puts 	'Please type in the output filename you would like to save as JSON:'
	json_output = $stdin.gets.chomp
else
	csv_input = ARGV[0]
	json_output = ARGV[1]
end

if !csv_input
	puts 'Error! No CSV input file specified. Please try again and specify a CSV file as the first argument to this command.'
	exit(1)
elsif !json_output
	puts 'Error! No JSON output file specified. Please try again and specify a JSON file to be output as the second argument to this command.'
	exit(1)
end

if ARGV[2] == 'tab'
	lines = CSV.open(csv_input, options = { :col_sep => "\t" }).readlines
else
	lines = CSV.open(csv_input).readlines
end


keys = lines.delete lines.first

puts keys

File.open(ARGV[1], 'w') do |f|
	data = lines.map do |values|
		Hash[keys.zip(values)]
	end
	f.puts JSON.pretty_generate(data)
end