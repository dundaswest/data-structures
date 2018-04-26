var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.mysize = 0;
  obj.map = {};
  _.extend(obj, queueMethods);
  return obj;
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


/*var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    size++;
    storage[size-1] = value;
  };

  someInstance.dequeue = function() {
    size--;
    var output = storage[0];
    for(var i = 0; i < size;i++) {
      for(var key in storage) {
        storage[i] = storage[key];
      }
    }
    return output;
  };

  someInstance.size = function() {
    return Math.max(size,0);
  };

  return someInstance;
};*/