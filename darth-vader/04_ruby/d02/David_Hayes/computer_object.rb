computer = Object.new

# setter
def computer.set_brand(brand_name)
  @brand = brand_name
end
# getter
def computer.get_brand
  @brand
end

# setter
def computer.set_name(computer_name)
  @name = computer_name
end
# getter
def computer.get_name
  @name
end

# setter
def computer.set_model(computer_model)
  @model = computer_model
end
# getter
def computer.get_model
  @model
end

# setter
def computer.set_os(operating_system)
  @os = operating_system
end
# getter
def computer.get_os
  @os
end

def computer.to_s
  return @brand.to_s + ' brand, model ' +
    @model.to_s + ' running ' + @os.to_s +
    ' has name: ' + @name.to_s
end

computer.set_brand('Alienware')
computer.set_os('OS X Yosemite')
computer.set_model('Neo Silver')
computer.set_name('HAL')
computer.to_s
