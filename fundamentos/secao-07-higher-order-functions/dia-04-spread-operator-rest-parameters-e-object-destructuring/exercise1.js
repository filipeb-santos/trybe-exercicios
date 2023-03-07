//Exercise 1

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

//Exercise 2

const sum = (...numbers) => numbers.reduce((arr, crr) => arr + crr, 0);

//Exercise 3

const alex = {
  name: 'Alex',
  age: 26,
  likes:['fly fishing'],
  nationality: 'Australian'
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes:['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic'
}


const personLikes = ({name, age, likes, nationality}) => `${name} is ${age} years old, is ${nationality} and likes ${likes.join(', ')}.`;

console.log(personLikes(gunnar));

//Exercise 4

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian'
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian'
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian'
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish'
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian'
  }
]

filterPeople = () => {
  const persons = people.filter((nation) => nation.nationality === 'Australian').filter((year) => year.bornIn > 1900 && year.bornIn < 2001);
  return persons;
}
console.log(filterPeople())

//Exercise 5

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({name, length, measurementUnit}) => {
  return `O navio ${name} tem ${length} ${measurementUnit} de comprimento`
}

// retorno esperado
console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'