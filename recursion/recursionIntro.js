//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
var loopDown = function(n) {
  while(n > 0) {
    console.log(n)
    n--;
  }
}



//2. Next, try looping just like above except using recursion
var loopDown = function(n) {
  if(n === 0) {
    return n
  }
  return n - loopDown(n)
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//5. Write a function 'recursiveMultiplier' that takes two arguments,
// 'arr and num', and multiplies each arr value into by num and returns an array of the values.

var recursiveMultiplier = function(arr , num) {
  var emptyArray = []
  var addItems = function(arr) {
    if(arr.length > 0) {
      emptyArray.push(arr.shift()*num));
      addItems(arr);
    }
    return;
  }
  addItems(arr);
  return emptyArray;
}

var recursiveMultiplier = function(arr ,num) {
  if(arr.length === 0) {
    return arr;
  }
  var last = arr.pop();

}


//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

var recursiveReverse = function(arr) {
  var emptyArray = [];
  var addItems = function(orderedArr) {
    if(orderedArr.length >  0) {
      emptyArray.push(orderedArr.pop());
      addItems(orderedArr);
    }
    return;
   }
   addItems(arr);
   return emptyArray;
}
