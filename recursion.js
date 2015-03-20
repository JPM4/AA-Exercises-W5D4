var range = function(first, last) {
  var arr = []
  if (last < first) {
    return arr
  }

  arr.push(first)

  return arr.concat(range(first + 1, last))
};

console.log(range(5,5))

var iterSum = function(arr) {
  var sum = 0;
  arr.forEach(function(el) {
    sum += el
  })

  return sum;
}

console.log(iterSum([4,5,0,55]))

var recSum = function(arr) {
  if(arr.length === 1) {
    return arr[0];
  }
  return arr.shift() + recSum(arr);
}

console.log(recSum([4,5,0,55,1]))

var recExpo1 = function(b, n) {
  if (n === 0 ) {
    return 1
  }

  return b * recExpo1(b, n-1)
};

console.log(recExpo1(3,4))
console.log(recExpo1(1,0))

var recExpo2 = function(b, n) {
  if (n === 0 ) {
    return 1
  } else if (n === 1) {
    return b
  } else if (n % 2 === 0 ) {
    return   recExpo2(b, (n/2)) * recExpo2(b, (n/2))
  }
    return b * (recExpo2(b, (n-1)/2) * recExpo2(b, (n-1)/2))
};

console.log(recExpo2(3,4));
console.log(recExpo2(1,0));

var fibonacci = function(n) {
  if ( n == 1 ) {
    return [1]
  } else if (n == 2 ) {
    return [1, 1]
  }
  fib = fibonacci(n-1)
  l = fib.length
  fib.push((fib[l-1] + fib[l-2]))
  return fib
}

console.log(fibonacci(9))


var bsearch = function(arr, target) {
  if (arr.length === 1 && arr[0] !== target ) { return "NOT IN ARRAY" }

  var pivot = parseInt(arr.length / 2);

  if (arr[pivot] === target) {
    return pivot;
  } else if (arr[pivot] > target) {
      return bsearch(arr.slice(0,pivot), target);
  } else {
      right = bsearch(arr.slice(pivot + 1), target);
  } if (right === "NOT IN ARRAY") {
      return "NOT IN ARRAY"
  }
    else {
      return pivot + 1 + right
  }
};

console.log(bsearch([1,4,5,7,8,9,45],1))

var makeChange = function(amt, change) {




  // change.forEach(function(coin) {
  //   if (amt / coin === 1) {
  //     console.log([coin])
  //     return [coin]
  //   } else if (amt > coin) {
  //     console.log(amt - coin)
  //     console.log(change)
  //
  //     return (makeChange((amt - coin), change)).push(coin)
  //     console.log(coins)
  //     coins.push(coin)
  //     console.log(amt)
  //     return coins
  //   }
  // })


};

console.log(makeChange(15,[10,5,1]))
console.log(makeChange(14, [10, 7, 1]))
