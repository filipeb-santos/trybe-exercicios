const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

//const flatten = arrays.flat() ;
//const flatten = arrays.reduce((acc, crr) => [acc + crr]);
const flatten = arrays.reduce((acc, crr) => [...acc, ...crr ]);
console.log(flatten)

