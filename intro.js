var myUniq = function(arr) {
  var new_arr = [];
  arr.forEach(function(el) {
    if (new_arr.indexOf(el) === -1) {
      new_arr.push(el);
    }
  });
  return new_arr;
};

console.log(myUniq([1,2,3,4,5, 5, 4]));
console.log(myUniq([1,2,3,4,5]));
console.log(myUniq(["flower", "flower", 3, 4, 1, 1, 9, "flower"]));

var twoSum = function(arr) {
  var results = [];
  arr.forEach(function(el, index) {
    for (var increment = index + 1; increment < arr.length; increment++) {
      if (el + arr[increment] === 0) {
        results.push([index, increment]);
      }
    }
  });
  return results;
};

console.log(twoSum([-1, 0, 2, -2, 1]));
console.log(twoSum([5,-5,1,0,0,44,-44,-5]));

var myTranspose = function(arr) {
  var transposed = [];
  for (var colNum = 0; colNum < arr.length; colNum++){
    var row = [];
    arr.forEach( function(el){
      row.push(el[colNum]);
    });
    transposed.push(row);
  }
  return transposed;
};

rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

console.log(myTranspose(rows));
