function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  console.log(this.name + " loves " + this.owner );
};

kitten = new Cat("Earl", "Ned")
kitten2 = new Cat("Cornelius", "Andrew")
kitten3 = new Cat("Tim Duncan", "Popovich")

console.log(kitten2.cuteStatement)




kitten2.cuteStatement()
kitten3.cuteStatement()
console.log(kitten3.owner)

Cat.prototype.cuteStatement = function() {
  console.log( "Everyone loves " + this.name)
}

kitten2.cuteStatement()

Cat.prototype.meow = function(n) {
  console.log( Array(n+1).join("Meow ") )
}

kitten2.meow(3)

kitten2.meow = function() {
  console.log( "purrrr")
}

kitten2.meow()
kitten3.meow(3)
