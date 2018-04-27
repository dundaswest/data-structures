

// Instantiate a new graph
var Graph = function() {
  //this....
  this.nodeArray = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nodeObj = {};
  nodeObj.value = node;
  nodeObj.links = [];
  this.nodeArray.push(nodeObj);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  
  for(var i = 0; i < this.nodeArray.length; i++){
    if(this.nodeArray[i].value === node){
      return true;
    }
  }
  return false;
  
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  
  for(var i = 0; i < this.nodeArray.length; i++){
    if(this.nodeArray[i].value === node){
      this.nodeArray.splice(i,1)
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromNodeObj = {};
  var toNodeObj = {};
  for(var i = 0; i < this.nodeArray.length; i++) {
   if(this.nodeArray[i].value === fromNode) {
    fromNodeObj = this.nodeArray[i];
   } 
   if(this.nodeArray[i].value === toNode) {
    toNodeObj = this.nodeArray[i];
   }
  }
  
  var result1 = false;
  var result2 = false;
  
  if(fromNodeObj.links){
    for(var i = 0; i < fromNodeObj.links.length; i++){
      if(fromNodeObj.links[i] === toNodeObj){
        result1 = true;
      }
    }
  }
  if(toNodeObj.links){
    for(var i = 0; i < toNodeObj.links.length; i++){
      if(toNodeObj.links[i] === fromNodeObj){
        result2 = true;
      }
    }
  }
  
  return result1 && result2;
 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  
  var fromNodeObj = {};
  var toNodeObj = {};
  for(var i = 0; i < this.nodeArray.length; i++) {
   if(this.nodeArray[i].value === fromNode) {
    fromNodeObj = this.nodeArray[i];
   } 
   if(this.nodeArray[i].value === toNode) {
    toNodeObj = this.nodeArray[i];
   }
  }
  fromNodeObj.links.push(toNodeObj);
  toNodeObj.links.push(fromNodeObj);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeObj = {};
  var toNodeObj = {};
  for(var i = 0; i < this.nodeArray.length; i++) {
   if(this.nodeArray[i].value === fromNode) {
    fromNodeObj = this.nodeArray[i];
   } 
   if(this.nodeArray[i].value === toNode) {
    toNodeObj = this.nodeArray[i];
   }
  }
  
 
    
  for(var i = 0; i < fromNodeObj.links.length; i++){
    if(fromNodeObj.links[i] === toNodeObj){
      fromNodeObj.links.splice(i,1);
    }
  }
  for(var i = 0; i < toNodeObj.links.length; i++){
    if(toNodeObj.links[i] === fromNodeObj){
      toNodeObj.links.splice(i,1);
    }
  }
  
  
 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(callback){
  return this.nodeArray.forEach(function(node){
   return callback(node.value);
  });
 
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Answer: addNode = constant, all other functions = linear
 */
 

