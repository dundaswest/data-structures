var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage['last'] = value;
  };

  someInstance.pop = function() {
    size--;
    return storage['last'];
  };

  someInstance.size = function() {
    return Math.max(size,0);
  };

  return someInstance;
};


/*stack.push('a');
expect(stack.pop()).to.equal('a');
stack.push('b');
expect(stack.pop()).to.equal('b');*/