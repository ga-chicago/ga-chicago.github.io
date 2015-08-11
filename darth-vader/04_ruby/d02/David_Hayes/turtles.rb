class TMNT
  def initialize(name, color, weapon, saying)
    @name = name
    @color = color
    @weapon = weapon
    @saying = saying
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

  def saying
    @saying
  end

  def to_s
    puts "#{@name} is #{@color}. He carries #{@weapon} and is fond of saying #{@saying}"
  end
end
