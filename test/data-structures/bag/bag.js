var Bag = require('../../../src/data-structures/bag/bag');

var b = new Bag();
console.log('bag -> empty:', b.isEmpty(), 'size:', b.size());

var rnd = Math.floor(Math.random() * 1000);
for(var i = 0; i < rnd; i++){
  b.add(Math.random());
}

console.log('bag -> empty:', b.isEmpty(), 'size:', b.size());
