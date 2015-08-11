computer = Object.new

def computer.set_properties(brand, name, model, operating_system)
	@brand = brand
	@name = name
	@model = model
	@operating_system = operating_system
end

def computer.get_properties
	puts 'This ' + @brand.to_s + ' ' + @name.to_s + ' is a ' + @model.to_s + ' type system installed with ' + @operating_system.to_s + '.'
end

computer.set_properties('Apple', 'MacBook Pro', 'Retina 15 inch', 'Mac OS X Yosemite')

computer.get_properties