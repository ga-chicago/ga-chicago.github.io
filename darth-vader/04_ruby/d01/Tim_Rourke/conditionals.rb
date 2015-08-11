# Do we have enough pizza for everyone?

num_of_pizzas = 7
slices_per_person = 3
total_num_of_students = 14

def num_of_slices(pizza_count)
	pizza_count * 8
end

if num_of_slices(num_of_pizzas) / total_num_of_students >= slices_per_person
	puts "We have enough slices per person!"
else
	puts "We need more pizza!"
end