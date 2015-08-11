class Person
    def initialize(name, age, catch_phrase, height, hair_color)
      @name = name
      @age = age
      @catch_phrase = catch_phrase
      @hair_color = hair_color
      @height = height

    end

      def to_s
        puts "#{@name} is #{@age} years old, is #{@height} tall, has #{@hair_color} hair, and always says #{@catch_phrase}"
      end
end

me = Person.new('Brad Bolander', '19', '', '6"1', 'brown')
me.to_s
