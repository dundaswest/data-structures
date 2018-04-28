var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  
  var checkTree = function(node) {
    if(node.value === target) {
      return true;
    }
    if(node.children.length > 0){
      
      for(var i = 0; i < node.children.length; i++){
        if (checkTree(node.children[i])){
          return true;
        }
      }
    }   
    return false;     
  };
  return checkTree(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Answer: linear time complexity
 */
