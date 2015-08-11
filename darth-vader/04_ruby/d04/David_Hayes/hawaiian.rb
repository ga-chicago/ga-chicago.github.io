class HShirt
  def initalize(name,color,style)
    @name = name
    @color = color
    @style = style
  end

  def name(name)
    @name = name
  end

  def name
    @name
  end

  def gender(gender)
    @gender=gender
  end

  def gender
    @gender
  end

  def style(style)
    @style = style
  end

  def style
    @style
  end

  def to_s
    puts 'This person is #{@name}. They are a #{@shirt_type} and their gender is #{@gender}.'
  end
end
