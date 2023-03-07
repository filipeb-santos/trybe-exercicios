// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mango', 'Guava', 'Orange'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Strawberry', 'Banana', 'Apple'];

const fruitSalad = (fruit, additional) => {
  const newItens = [...fruit, ...additional];
  return newItens;
};

console.log(fruitSalad(specialFruit, additionalItens));