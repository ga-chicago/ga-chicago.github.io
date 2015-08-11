class Person
  def initialize(name,age,catch_phrase,hair_color,height)
    @name = name
    @age = age
    @catch_phrase = catch_phrase
    @hair_color = hair_color
    @height = height
  end
  #setter
  def set_name(name)
    @name = name
  end
  #getter
  def get_name
    @name
  end
  #setter
  def set_age(age)
    @age = age
  end
  #getter
  def get_age
    @age
  end
  #setter
  def set_catch_phrase(catch_phrase)
    @catch_phrase = catch_phrase
  end
  #getter
  def get_catch_phrase
    @catch_phrase
  end
  #setter
  def set_hair_color(hair_color)
    @hair_color = hair_color
  end
  #getter
  def get_hair_color
    @hair_color
  end
  #setter
  def set_height(height)
    @height = height
  end
  #getter
  def get_height
    @height
  end

  def to_s
    return "My name is #{@name} and I'm #{@age} years old. I have #{@hair_color} hair and I like to say, '#{@catch_phrase}'"
  end
end
