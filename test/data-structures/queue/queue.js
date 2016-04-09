var Queue = require('../../../src/data-structures/queue/queue');

var q = new Queue();
console.log('queue -> empty:', q.isEmpty(), 'size:', q.size());

var rnd = Math.floor(Math.random() * 25);
for(var i = 0; i < rnd; i++){
  var flip = Math.floor(Math.random() * 2);
  var num = Math.floor(Math.random() * 100);

  if(flip){
    q.enqueue(num);
    console.log('enqueue -> num:', num, 'queue:', q);
  }else{
    var val = q.dequeue();
    console.log('dequeue -> val:', val, 'queue:', q);
  }
}
