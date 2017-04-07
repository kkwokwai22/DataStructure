/*
Implement factorial.

*/

var factorial = function(n) {
  console.log(n);
  // base case
  if(n === 1) {
    return n;
  }
  return n * factorial(n-1);
}

factorial(5);


// if we call factorial(5), then the recursion will run:

// 5 * factorial(4)
//   4 * factorial(3)
//     3 * factorial(2)
//       2 * factorial(1)
//         1
