var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if(list.head === null){
      list.head = newNode;
      list.tail = list.head;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    if(list.head !== null){
      var temp = list.head.value;
      list.head = list.head.next;
      return temp;
    }
   
    
  };

  list.contains = function(target) {
    
    var checkNode = function(node) {
      if(node.value === target) {
        return true;
      } 
      if(node.next == null) {
        return false;
      } else {
        return checkNode(node.next);
      }
     
    };
    return checkNode(list.head);
  };
 
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
