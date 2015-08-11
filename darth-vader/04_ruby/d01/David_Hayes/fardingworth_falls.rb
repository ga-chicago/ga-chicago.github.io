

def town_names(num = 3, geo = "",short = "")
  starts = [ 'Bed', 'Brunn', 'Dun', 'Far', 'Glen', 'Tarn' ]
  middles = [ 'ding', 'fing', 'ly', 'ston' ]
  ends = [ 'borough', 'burg', 'ditch', 'hall', 'pool', 'ville', 'way', 'worth']
  geos = [ '-on-sea', ' Falls' ]

  output = num


  output.times do
    result = ""
    result += starts[rand(starts.count)]
    if short != 'short_name'
      result += middles[rand(middles.count)]
    end
    result += ends[rand(ends.count)]
    if geo == 'near_water'
      result += geos[rand(geos.count)]
    end
    puts result
  end
end

puts "only 3 town names"
town_names

puts "5 town names near water"
town_names(5,'near_water')

puts "4 short town names"
town_names(4,'','short_name')
