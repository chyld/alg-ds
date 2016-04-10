var LinkedList = require('../../../src/data-structures/linked-list/linked-list');

var list = new LinkedList();
console.log('list -> empty:', list.isEmpty(), 'size:', list.size());

var rnd = Math.floor(Math.random() * 25);
for(var i = 0; i < rnd; i++){
  var flip = Math.floor(Math.random() * 2);
  var num = Math.floor(Math.random() * 100);

  if(flip){
    list.push(num);
    console.log('push -> num:', num, 'list:', JSON.stringify(list));
  }else{
    var val = list.pop();
    console.log('pop -> val:', val, 'list:', JSON.stringify(list));
  }
}

console.log('list -> empty:', list.isEmpty(), 'size:', list.size());
