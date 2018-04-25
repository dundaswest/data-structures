var Queue = function() {
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
};
