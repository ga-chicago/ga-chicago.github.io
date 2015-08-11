# now let's build an array
alpha = ['a', 'b']
#[
#    [0] "a",
#    [1] "b"
#]

# let's see how we .... SEND methods to objects
alpha.send(:count)
#2
alpha.send(:first)
#"a"
alpha.send(:last)
#"b"
alpha.send(:sample)
#"a"
alpha.send('sample')
#"b"
alpha.send('last')
#"b"
alpha.send('count')
#2
