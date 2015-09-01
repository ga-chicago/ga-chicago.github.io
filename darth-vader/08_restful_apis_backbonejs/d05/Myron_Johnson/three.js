// Objects; Objects Everywhere

var laptop = {
    brand: "Apple",
    model: "MacBook Pro",
    displaySize: 15,
    memory: 16,
    disk: 512,
    speak: function() {
      console.log(this.brand);
      console.log(this.model);
      console.log(this.displaySize);
      console.log(this.memory);
      console.log(this.disk);
    }
  }
