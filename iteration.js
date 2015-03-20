var bubbleSort = function(arr) {
  var sorted = false

  while(sorted === false) {
    sorted = true
    arr.forEach(function(el, index) {
      if (el > arr[index + 1]) {
        var temp = el
        var temp2 = arr[index+1]
        arr[index] = temp2
        arr[index+1] = temp
        sorted = false
      }
    });
  }
  return arr
}

console.log(bubbleSort([5,2,3,4,1]))
console.log(bubbleSort([5]))

var substring = function(string) {
  var result = []

  string.split("").forEach (function (el, index){
    for(var i = index; i < string.length; i++ ){
      var substring = string.slice(index, i + 1);
      if (result.indexOf(substring) === -1) {
        result.push(substring)
      };
    }
  })
  return result;
}

console.log(substring("banana"))
