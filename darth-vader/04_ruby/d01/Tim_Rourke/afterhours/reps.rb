# Round 1
def lengths(array_of_strings)
	result = []

	array_of_strings.each do |item|
		length = item.length
		result.push(length)
	end

	result
end

example_array = ['hello', 'yo', 'mamma']

puts "Round 1"
puts lengths(example_array)
puts "   "


# Round 2
def transmogrifier(a, b, c)
	result = (a*b)**c

	result
end

puts "Round 2"
puts transmogrifier(5, 3, 2)
puts "   "

# Round 3
def toonify(accent = "", sentence)
	result = ''

	if accent == 'daffy'
		result = sentence.gsub 's', 'th'
	elsif accent == 'elmer'
		result = sentence.gsub 'r', 'w'
	elsif accent == 'fitty cent'
		result = 'I got shot nine times'
	end
		
	result
end

puts "Round 3"
puts toonify('daffy', 'suck it trebek')
puts toonify('elmer', 'suck it trebek')
puts toonify('fitty cent', 'suck it trebek')
puts "   "

# Round 4
def word_reverse(word_array = [])
	word_array.reverse
end

puts "Round 4"
puts word_reverse(['Dude', 'how', 'many', 'times', 'are', 'you', 'going', 'to', 'make', 'us', 'type', 'long', 'ass', 'arrays?'])
puts "   "

# Round 5
def letter_reverse(letter_array = [])
	result = []
	letter_array.each do |word|
		result.push(word.split('').reverse.join)
	end
	result
end

puts "Round 5"
puts letter_reverse(['Dude', 'how', 'many', 'times', 'are', 'you', 'going', 'to', 'make', 'us', 'type', 'long', 'ass', 'arrays?'])
puts "   "

# Round 6
def longest(longest_array = [])
	result = ""
	longest_array.each do |word|
		if word && word.length >= result.length
			result = word
		end
	end
	result
end

puts "Round 6"
puts longest(['extremely', 'really', 'hugely', 'word', 'f'])
puts "   "