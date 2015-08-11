class Movie
  def initialize(title, year, include_year)
    @title = title
    @year = year
    @include_year = include_year
  end

  def get_data
    @title
    @year
    @include_year
  end

def full_title()
    if @include_year == true
      puts "The movie #{@title} was released in #{@year}"
    else
      puts "The movie is called #{@title}."
    end
end
end

three_hunnit = Movie.new("300", "2007", "true")
three_hunnit.full_title()
