function Stack(){
  this.list = [];
}

Stack.prototype.push = function(item){
  this.list[this.size()] = item;
};

Stack.prototype.pop = function(){
  if(this.size()){
    var end = this.size() - 1;
    return this.list.splice(end, 1)[0];
  }
};

Stack.prototype.isEmpty = function(){
  return this.size() === 0;
};

Stack.prototype.size = function(){
  return this.list.length;
};

module.exports = Stack;
