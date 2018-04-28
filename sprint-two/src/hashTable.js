

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket = this._storage.get(index);
  
  if(!(bucket)){
    bucket = [];
    bucket.push(tuple);
    this._storage.set(index, bucket);
  } else {
    var valueFound = false;
    for(var i = 0; i < bucket.length; i++){
      if(bucket[i][0] === k){
        bucket[i][1] = v;
        valueFound = true;
        break;
      }
    }
    if(valueFound === false){
      bucket.push(tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var target = this.iterate(index, k);
  if(target){
    return target[0][1];
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      bucket.splice(i,1);
    }
  }
  
};

HashTable.prototype.iterate = function(index, k){
  var bucket = this._storage.get(index);
  for(var i = 0; i < bucket.length; i++){
    if(bucket[i][0] === k){
      return [bucket[i], i];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


