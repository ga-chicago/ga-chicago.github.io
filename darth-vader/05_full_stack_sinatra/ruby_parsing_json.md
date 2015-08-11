___

<strong>Ruby<strong>
<h3>Parsing JSON with method *args</h3>

---

##Scope
This code snippet shows how to parse JSON with *args as a method's parameters.

```ruby
def parse_me_some_json(*args)

  number = args[0]
  puts args[0] #print args0
  puts args[1] #print args1
  #take 2nd input and parse it to JSON
  {"question":"what is the answer to life, the universe, and everything?"}
  args_to_json = args[1].to_json
  answer = JSON.parse(args_to_json)['question'] # parse the JSON and get the value for near ("what is the answer to life, the universe, and everything?")
  # return answer!
  return answer + " '" + number.to_s + "', replied Deep Thought."

end

#usage
parse_me_some_json(42, {"question":"what is the answer to life, the universe, and everything?"})
```
