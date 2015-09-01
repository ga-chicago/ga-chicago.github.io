var model = function(color,name,numbers) {
  this.color = color;
  this.name = name;
  this.numbers = [ 3, 2, 1];
  this.get = function() {
    return this.name + ' is color: ' + this.color;
  }
  this.set = function(numbers) {
    for (var num in numbers) {
      this.numbers.push(numbers[num]);
    }
  }
}
