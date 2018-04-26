var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(queueMethods);
  newStack.mysize = 0;
  newStack.map = {};
  return newStack;
};

var queueMethods = {
  enqueue : function(value) {
    this.mysize++;
    this.map[this.mysize-1] = value;
  },
  dequeue : function() {
    this.mysize--;
    var output = this.map[0];
    for(var i = 0; i <= this.mysize;i++) {
      for(var key in this.map) {
        this.map[i] = this.map[key];
      }
    }
    return output;
  },
  size : function() {
    return Math.max(this.mysize,0);
  }
};


