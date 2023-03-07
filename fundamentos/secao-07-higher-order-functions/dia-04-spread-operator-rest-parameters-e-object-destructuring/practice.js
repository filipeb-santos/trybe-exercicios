// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mango', 'Guava', 'Orange'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Strawberry', 'Banana', 'Apple'];

const fruitSalad = (fruit, additional) => {
  const newItens = [...fruit, ...additional];
  return newItens;
};

console.log(fruitSalad(specialFruit, additionalItens));

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
}

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL'
}

const informations = {...user, ... jobInfos};

const { name, age, nationality, profession, squad, squadInitials} = informations;

const text = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`

console.log(text);
