puts 'Welcome to Blackjack!'
cards = ['A',1,2,3,4,5,6,7,8,9,10,'J','Q','K']

total = 0

while (total < 21)
  if (total < 16)
  total += newCard()
  puts total
  totalCheck()
  end
  else
      puts 'Your final total is: ' + total + ' Thanks for playing!'
      break;
  end
end



def totalCheck
    if (total > 21)
        puts 'you lose!'
    end
    if (total == 21)
        puts 'BLACKJACKKKKKK!!'
    end
end

def newCard
    newCard = cards.sample
    if (newCard == 'A')
        newCard = 11
    end
    else if (newCard == 'J' || newCard == 'Q' || newCard == 'K')
        newCard = 10
    end
    return newCard
end
