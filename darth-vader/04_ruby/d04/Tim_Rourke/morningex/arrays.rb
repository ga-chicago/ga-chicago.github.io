shirts = ['Jim', 'Tristan', 'David', 'Myron', 'Brad', 'Matt']

skins = ['Tim', 'Eric', 'Kate', 'Chris', 'Isaac', 'Sonju', 'Dylan']

shirts.pop

skins.pop

shirts.push('Oprah')

skins.push('Kevin')

shirts.each do |person|
	puts person
end

skins.each do |person|
	puts person
end

shirts.map do |person|
	puts person
end

skins.map do |person|
	puts person
end

class ListMaker
	def initialize(name, item, priority)
		@list = [{:name => name.to_s, :item => item.to_s, :priority => priority.to_i}]
	end

	def add_item(name, item, priority)
		@list.push({:name => name.to_s, :item => item.to_s, :priority => priority.to_i})
	end

	def get_list
		@list
	end

	def to_s
		@list.to_s
	end

	def pop_list
		@list.pop
	end
end

list = ListMaker.new('Tim', 'Tacos', 8)

puts list.get_list

list.add_item('Tristan', 'Fine Italian Bitters', 10)
list.add_item('Isaac', 'Bespoke IPAs', 9)
list.add_item('Tom', 'AngularJS', 11)
list.add_item('Oscar the Grouch', 'Being a dick', 235802368)

puts list.get_list

puts list.to_s

list.pop_list

puts list.to_s