Array.prototype.myEach = function(cb) {
  for(var i=0; i < this.length; i++) {
    cb(this[i]);
  }
};

var cb = function(a, b) {
  // console.log(i + 2);
  return a / b;
};




// [3,4,7,0,5,9,15555].myEach(print_cb)
//
Array.prototype.myMap = function(action) {
  var mapped = []
  this.myEach(function(el) {
    new_el = action(el)
    mapped.push(new_el)
  });

  return mapped;
};
var b = [3,4,7,0,5,9,15555]
console.log(b.myMap(cb))
console.log(b)

Array.prototype.myInject = function(action, acc) {
  if (acc) {
    var skip = false
  } else {
    acc = this[0]
    var skip = true
  }

  this.myEach (function(el) {
    if (skip) {
    skip = false
  } else {
    acc = action(acc, el)
  }
  })
  return acc
};

console.log([100,10,5].myInject(cb, 1000))
