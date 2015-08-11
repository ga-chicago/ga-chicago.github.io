#RUBY REPS!

#ROUND 1
def lengths(strings)
  strings.map { |i| i.length }
end
array = ['hello', 'world']
lengths(array)

#ROUND 2
def transmorgrifier(num1,num2,num3)
  (num1*num2) ** num3
end
transmorgrifier(1,2,3)

#ROUND 3
def toonify(accent, sentence)
  if accent == 'daffy'
    return sentence.gsub 's', 'th'
  elsif accent == 'elmer'
    return sentence.gsub 'r', 'w'
  elsif accent == 'homer'
    return sentence.insert(-1, ' DOH!')
  else
    return sentence
  end
end

toonify('daffy', 'super slippery swimming swallows')
toonify('elmer', 'rolling rovers roaming russia')
toonify('homer', 'I just stubbed my toe,')

#ROUND 4
def word_reverse(string)
  string.split(' ').reverse.join(' ')
end
word_reverse('REVERSE ME')

#ROUND 5
def letter_reverse(sentence)
  sentence.split(' ').map { |i| i.split('').reverse.join('') }.join(' ')
end
letter_reverse('The quick brown fox')

#ROUND 6
def longest(strings)
  string_lengths = strings.map { |i| i.length }
  strings[string_lengths.rindex(string_lengths.max)]
end
array = ['which','of','these','is','longest']
longest(array)
