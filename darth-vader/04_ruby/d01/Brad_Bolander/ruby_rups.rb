#Round 1: Prime Time
def isPrime(num)
  numbers = Array(2...num)
  numbers.each do |element|
    if num % element == 0
      return false
    end
  end
return true
end
#Round 2: Fardingworth Falls

def town_names(i=3)
starts = Array['Bed','Brunn','Dun','Far','Glen','Tarn']
middles = Array['ding','fling','ly','ston']
ends = Array['bourough','burg','ditch','hall','pool','ville','way','worth']

finished_town_names = []


 (0...i).each do |element|
   finished_town_names[element] = starts.sample + middles.sample + ends.sample
 end

 return finished_town_names

end

town_names(5)
town_names()
