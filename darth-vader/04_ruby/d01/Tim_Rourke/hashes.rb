lich = {:name => 'Lichard', :age => 28}

puts lich[:name]

omily = {
	:name => 'Omily',
	:age => 26,
	:loves => lich
}

puts omily

lich[:age] = 27

puts omily

