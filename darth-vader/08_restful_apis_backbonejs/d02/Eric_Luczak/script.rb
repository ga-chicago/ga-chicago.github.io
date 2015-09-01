class Movie
  def initialize (title, year)
    @title = title
    @year = year
  end
  def title
    @title
  end
  def title=(new_title)
    @title = new_title
  end
  def year ; @year ; end
  def year=(new_year) ; @year= new_year ; end
  @@include_year = false
  def Movie.include_year=(new_value)
    @@include_year = new_value
  end
  def full_title
    if @@include_year
      "#{self.title} (#{self.year})"
    else
      self.title
    end
  end
end
# end of class
movie1 = Movie.new('settla', 1992)
movie2 = Movie.new('lol', 2002)

movielist = [movie1,movie2]

def print_movie(movie_list)
  separator = '=>'
  movie_list.each do |m|
    puts "#{m.title} #{separator} #{m.year}"
  end
end

print_movie(movieList)
