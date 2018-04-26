var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.mysize = 0;
  return newStack;
};

var stackMethods = {
  push: function(value) {
    this.mysize++;
    this[this.mysize] = value;
  },
  pop : function() {
    this.mysize--;
    return this[this.mysize+1];
  },

  size : function() {
    return Math.max(this.mysize,0);
  }
};


