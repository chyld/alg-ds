function Bag(){
  this.list = [];
}

Bag.prototype.add = function(item){
  this.list.push(item);
};

Bag.prototype.isEmpty = function(){
  return this.size() === 0;
};

Bag.prototype.size = function(){
  return this.list.length;
};

module.exports = Bag;
