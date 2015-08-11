## Do we have enough pizza?
num_of_pizzas = 7

def num_of_slices(pizza_count)
  pizza_count * 8
end

slices_per_person = 3
total_num_of_students = 14

if num_of_slices(num_of_pizzas) >= total_num_of_students * slices_per_person
  puts "there is enough pizza!"
else
  puts "there is not enough pizza"
end
