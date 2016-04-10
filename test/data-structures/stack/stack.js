var Stack = require('../../../src/data-structures/stack/stack');

var s = new Stack();
console.log('stack -> empty:', s.isEmpty(), 'size:', s.size());

var rnd = Math.floor(Math.random() * 25);
for(var i = 0; i < rnd; i++){
  var flip = Math.floor(Math.random() * 2);
  var num = Math.floor(Math.random() * 100);

  if(flip){
    s.push(num);
    console.log('push -> num:', num, 'stack:', s);
  }else{
    var val = s.pop();
    console.log('pop -> val:', val, 'stack:', s);
  }
}
