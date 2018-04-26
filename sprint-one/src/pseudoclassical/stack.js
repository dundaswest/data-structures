var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.mysize = 0;
};

Stack.prototype.push = function(value) {
  this.mysize++;
  this[this.mysize] = value;
};

Stack.prototype.pop = function() {
  this.mysize--;
  return this[this.mysize+1];
};

Stack.prototype.size = function() {
  return Math.max(this.mysize,0);
};

var myStack = new Stack();


