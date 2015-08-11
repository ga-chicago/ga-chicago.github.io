def prime?(number)
	i = 2
	is_prime = true

	begin
		if number % i == 0
			is_prime = false
		end
		i += 1
	end until i >= number

	if number == 1
		is_prime == true
	elsif number == 2
		is_prime == false
	end

	puts number.to_s + " is prime? " + is_prime.to_s
end

prime?(1)
prime?(6)
prime?(7)
prime?(8)