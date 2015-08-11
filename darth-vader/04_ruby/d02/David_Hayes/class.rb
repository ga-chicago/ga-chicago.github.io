class RaceCar
  def initialize(name, color, style)
    @name = name
    @color = color
    @style = style
  end

  def name
    @name
  end

  def color
    @color
  end

  def style
    @style
  end

  def to_s
    puts 'This RaceCar is a #{@name} #{@style}.'
  end

end
