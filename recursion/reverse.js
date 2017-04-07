/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

var revereseString = function(str) {
    var emptyString = '';
    var recursive = function(orderStr) {
      if(orderStr > 0) {
        return emptyString
      }
      console.log(str.slice(0, -i))
      emptyString += str.slice(0, -i);
      console.log(emptyString)
      count++;
    }
    recursive(str)
}

revereseString("kevin");
