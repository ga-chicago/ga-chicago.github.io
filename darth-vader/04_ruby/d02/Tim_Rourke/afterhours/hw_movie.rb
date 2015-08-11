class Movie
	def initialize(title, year, include_year)
		@title = title
		@year = year
		@include_year = include_year
	end

	def get_title
		@title
	end

	def get_year
		@year
	end

	def include_year?
		@include_year
	end

	def set_title(title)
		@title = title
	end

	def set_year(year)
		@year = year
	end

	def set_include_year(input)
		@include_year = input
	end

	def full_title
		if @include_year == true
			"#{@title} was released in #{@year}."
		else
			@title
		end
	end
end

the_pizza_monster = Movie.new('The Incredible Pizza Monster', '47BC', true)

puts the_pizza_monster.full_title