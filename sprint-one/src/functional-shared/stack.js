var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.mysize = 0;
  _.extend(obj, stackMethods);
  return obj;
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


