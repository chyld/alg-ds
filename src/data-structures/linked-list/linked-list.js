var Node = require('./node');

function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(data){
  var args = Array.prototype.slice.call(arguments);
  var node = args[1] || this.head;

  if(!node){
    this.head = new Node(data);
  }else if(!node.next){
    node.next = new Node(data);
  }else{
    this.push(data, node.next);
  }
};

LinkedList.prototype.pop = function(){
  var data;

  if(this.isEmpty()){
    return null;
  }else if(this.size() === 1){
    data = this.head.data;
    this.head = null;
    return data;
  }else{
    var temp = this._last(this.head);
    data = temp.next.data;
    temp.next = null;
    return data;
  }
};

LinkedList.prototype.isEmpty = function(){
  return this.size() === 0;
};

LinkedList.prototype.size = function(){
  return this._count(this.head, 0);
};

// -------------------------------------------------------------------------- //

LinkedList.prototype._count = function(node, count){
  if(!node){
    return count;
  }else{
    return this._count(node.next, count + 1);
  }
};

LinkedList.prototype._last = function(node){
  if(!node.next.next){
    return node;
  }else{
    return this._last(node.next);
  }
};

// -------------------------------------------------------------------------- //

module.exports = LinkedList;
