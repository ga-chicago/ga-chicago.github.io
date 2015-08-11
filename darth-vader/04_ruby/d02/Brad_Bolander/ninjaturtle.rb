class TMNT
    def initialize(name,color,weapon,quote)
      @name = name
      @color = color
      @weapon = weapon
      @quote = quote
    end

    def name
      @name
    end

    def color
      @color
    end

    def weapon
      @weapon
    end

    def quote
      @quote
    end

    def to_s
      puts "This turtle's name is #{@name} and his color is #{@color}.
            He uses a #{@weapon} and often says #{@quote}"
    end

end

leonardo = TMNT.new('Leonardo', 'Blue', 'Katana', '"Right on dude!"')
michaelangelo = TMNT.new('michaelangelo', 'Orange', 'Katana', '"COWABUNGA!"')
raphael = TMNT.new('Raphael', 'Red', 'Sai', '"Time to kick some butt!"')
donatello = TMNT.new('Donatello', 'Purple', 'Bow staff', '"Ill hack it!""')
