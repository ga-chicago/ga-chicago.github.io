computer = Object.new

def computer.set_brand(brand, name, model, operating_system)
  @brand = brand
  @name = name
  @model = model
  @operating_system = operating_system
end

def computer.get_info()
  @brand.to_s + ' ' + @name.to_s + ' ' + @model.to_s + ' ' + @operating_system.to_s
end

computer.set_info('apple', 'brads mac', 'macbook pro', 'yosemite')
computer.get_info()
