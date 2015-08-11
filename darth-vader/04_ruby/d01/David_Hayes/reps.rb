def lengths(array_of_strings)
  array_of_lengths = []
  array_of_strings.each { |a| array_of_lengths << a.length }
  puts array_of_lengths.to_s
end

puts 'Rep 1: lengths'
lengths(["hello", "what", "is", "up", "dude"])

def transmogrifier(first,second,power)
  puts (first * second) ** power
end

puts 'Rep 2: transmogrifier'
transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

def toonify(accent,sentence)
  if accent=='daffy'
    sentence =  sentence.gsub('s','th')
  elsif accent=='elmer'
    sentence = sentence.gsub('r', 'w')
  end
  puts sentence
end

puts 'Rep 3: toonify'
toonify('daffy', 'so you smell like sausage! You really do, darling!')
toonify('elmer', 'so you smell like sausage! You really do, darling!')
toonify('leroy', 'so you smell like sausage! You really do, darling!')

def wordReverse(str)
  array_of_strings = str.split(' ').reverse
  puts array_of_strings.join(' ')
end

puts 'Rep 4: wordReverse'
puts wordReverse("Now I know what a TV dinner feels like")

def letterReverse(str)
  array_of_strings = str.split(' ')
  out_string = ''
  array_of_strings.each { |a| out_string += a.reverse + ' ' }
  puts out_string
end

puts 'Rep 5: letterReverse'
letterReverse("Now I know what a TV dinner feels like")
letterReverse("Put Hans back on the line")

def longest(word_array)
  max_word = ""
  word_array.each do |i|
      if i.length > max_word.length
        max_word = i
      end
  end
  puts max_word

end

puts 'Rep 6: Longest'
longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
