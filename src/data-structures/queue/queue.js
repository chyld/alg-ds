function Queue(){
  this.list = [];
}

Queue.prototype.enqueue = function(item){
  this.list.splice(0, 0, item);
};

Queue.prototype.dequeue = function(){
  if(this.size()){
    var end = this.size() - 1;
    return this.list.splice(end, 1)[0];
  }
};

Queue.prototype.isEmpty = function(){
  return this.size() === 0;
};

Queue.prototype.size = function(){
  return this.list.length;
};

module.exports = Queue;
