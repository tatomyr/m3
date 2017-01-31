const M3 = require('./index.js');

const e = new M3();

const a = new M3([
  [0,1,2],
  [3,4,5],
  [6,7,8]
]);
console.log(a);
console.log(typeof a);

const b = new M3([
  [0,1,2],
  [3,4,5],
  [6,7,8]
]);

const c = new M3([
  [7,8,5],
  [1,4,6],
  [2,0,3]
]);


console.log('c * e -->');
console.log(c.multiply(e));

console.log('a * c -->');
console.log(a.multiply(c));
console.log(JSON.stringify(a.multiply(c)) === '[[5,4,12],[35,40,54],[65,76,96]]');
console.log('c * a -->');
console.log(c.multiply(a));
console.log(JSON.stringify(c.multiply(a)) === '[[54,74,94],[48,59,70],[18,23,28]]');
