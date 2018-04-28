var BinarySearchTree = function(value) {

  var newBinaryTree = {};
  
  // newBinaryTree.value = value;
  // newBinaryTree.left;
  // newBinaryTree.right;
  newBinaryTree = TreeNode(value);
  
  _.extend(newBinaryTree, binaryTreeMethods);

  //newBinaryTree.children = [];  

  return newBinaryTree;

};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value){
  var treeNode = TreeNode(value); //BinarySearchTree(value);
  //this.children.push(treeNode);
  
  var parentNode = this.findNode(this, treeNode);
  if(value > parentNode.value){
    parentNode.right = treeNode;
  }else {  //if ( value < parentNode.value )
    parentNode.left = treeNode;
  }
  //
  
};
binaryTreeMethods.contains = function(value, node){
  
  if(node === undefined){
    node = this; 
  }
  
  if(node.value === value){
    return true;
  } else if(value > node.value){
    
    if(node.right === null){
      return false;
    } else {
      return this.contains(value, node.right);
    }
  } else {  //(newNode.value < node.value) 
    if(node.left === null) {
      return false;
    } else {
      return this.contains(value, node.left);
    }
  }
  
};
binaryTreeMethods.depthFirstLog = function(funcCallback, node){
  
  if(node === undefined){
    node = this; 
  }
  
  if(node.value){
    funcCallback(node.value);
  }
  
  if(node.left){
    this.depthFirstLog(funcCallback, node.left);
  } 
  
  if (node.right) {
    this.depthFirstLog(funcCallback, node.right);
  } 
    
};

binaryTreeMethods.findNode = function(node, newNode) {
  
  if(newNode.value > node.value){
    if(node.right === null){
      return node;
    } else {
      return this.findNode(node.right, newNode);
    }
  } else {  
    if(node.left === null) {
      return node;
    } else {
      return this.findNode(node.left, newNode);
    }
  }
}

var TreeNode = function(value) {
  var treeNode = {};

  treeNode.value = value;
  treeNode.left = null;
  treeNode.right = null;

  return treeNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Answer: all should be linear time complexity
 */

