const greet = R.replace('{name}', R.__, 'Hello, {name}!');
 //=> 'Hello, Alice!'
console.log(greet('Alice'))

//map 
const perkalian = x => x * 2;
const a = R.map(perkalian, [1, 2, 3]); //=> [2, 4, 6]
const b = R.map(perkalian, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
console.log(a, b)

