def things_i_like(*args)
  args.each do |arg|
    puts 'I like ' + arg
  end
end

things_i_like('piano','cycilng','movies','coding')

def favorite_cities(*args)
  args.each do |arg|
    puts 'I love to visit ' + arg
  end
end

favorite_cities('Seattle','Chicago','Colorado Springs','Omaha','Dallas','New York City')
