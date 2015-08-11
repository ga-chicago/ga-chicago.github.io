h_shirts = ['Brad','Joe','Tristan','Tom', 'Matt', 'Jim', 'David', 'Myron']
normal_shirts = ['Dylan', 'Sonju', 'Kate', 'Isaac', 'Chris', 'Eric']

h_shirts.pop
normal_shirts.pop

h_shirts.push('James')
normal_shirts.push('Angie')

h_shirts.each do |i|
    puts i
end

normal_shirts.each do |i|
    puts i
end

class Hawaiian(shirt,color,name)
  def initialize
    @shirt = shirt
    @color = color
    @name = name
  end

  def to_s(person)
    puts person.to_s
  end

end
person = Hawaiian.new('true', 'red', 'Brad')
