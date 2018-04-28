var BinarySearchTree = function(value) {

  var newTree = {};
  
  newTree.value = value;
  newTree.left;
  newTree.right;
  
  _.extend(newTree, treeMethods);

  newTree.children = [];  

  return newTree;

};

var treeMethods = {};

treeMethods.insert = function(value){
  var treeNode = BinarySearchTree(value);
  this.children.push(treeNode);
  //
  
};
treeMethods.contains = function(){};
treeMethods.depthFirstLog = function(){};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 /*https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/*/
