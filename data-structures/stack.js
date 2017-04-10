/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

function Stack(capacity) {
  this.storage = '';
}

Stack.prototype.push = function(value) {
  this.storage = this.storage.concat("***", value);
};
// Time complexity:

Stack.prototype.pop = function() {
  // slice off the last characters up until ***
  var str = this.storage.slice(this.storage.lastIndexOf('***') + 3);
  // updating the new stack without the last item
  this.storage = this.storage.substring(0 , this.storage.lastIndexOf('***'))
  return str;
};
// Time complexity
Stack.prototype.peek = function() {
  return this.storage.slice(this.storage.lastIndexOf('***') + 3);
};
// Time complexity:

Stack.prototype.count = function() {
  var copyString = this.storage;
  var count = 0;
  console.log(copyString.length);
  while(copyString.length >= 0) {
    // copyString.prototype.pop();
    count++;
  }
  return count;
};
// Time complexity:

var kevinStack = new Stack();
kevinStack.push('great');
kevinStack.push('anothegreat');
kevinStack.push('topStack');
console.log(kevinStack.count());



/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

/**
 * initialize your data structure here.
 */
var MinStack = function(capacity) {
    this.capacity = capacity;
    this.storage = {};
    this.min = new Stack();
    this.count = 0;
};

MinStack.prototype.push = function(x) {
    if(this.min.top )
    this.storage.push(x);
    this.count++;
};


MinStack.prototype.pop = function() {

};


MinStack.prototype.top = function() {
    if(this.storage.length <= 0) {
      return 0;
    }
    return this.storage[count];
};


MinStack.prototype.getMin = function() {

};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


// 2. Sort a stack so that its elements are in ascending order.
//
// 3. Given a string, determine if the parenthesis in the string are balanced.
// Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
// Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
//
// 4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
// You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
//    1. only one disk can be moved at a time
//    2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
//    3. no disk can be placed on top of a disk that is smaller than it
// The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
//  */
