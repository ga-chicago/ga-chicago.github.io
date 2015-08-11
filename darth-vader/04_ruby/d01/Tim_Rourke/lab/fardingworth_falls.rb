def town_names(num = "", optional = "")

	starts = ['Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn']
	middles = ['ding', 'fing', 'ly', 'ston']
	ends = ['borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']
	waternames = ['-on-sea', ' Falls']

	output = 3

	if num == 5
		output = 5
	end

	output.times do 
		result = ""

		result += starts[rand(starts.count)]

		if optional != 'short_name'
			result += middles[rand(middles.count)]
		end

		result += ends[rand(ends.count)]

		if optional == 'near_water' && num == 3
			result += waternames[rand(2)]
		end

		if optional == 'in_middle_earth'
			result += ' Shire'
		end

		puts result
	end

end

puts "  "

puts "------only 3 times"
town_names
puts "  "

puts "------only 5 times"
town_names(5)
puts "  "

puts "------only 3 times with water"
town_names(3, 'near_water')
puts "  "

puts "------only 3 times with shire"
town_names(3, 'in_middle_earth')
puts "  "

puts "------only 3 times with short names"
town_names(3, 'short_name')
puts "  "