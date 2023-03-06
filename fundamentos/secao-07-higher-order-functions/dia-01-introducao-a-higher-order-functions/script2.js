const generateEmail = (nome) => {
  const name = nome.toLowerCase().replace(' ', '_');
  return `${name}@trybe.com`  
}

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Pedro Guerra'),
    id2: generateEmail('Luiza Drummond'),
    id3: generateEmail('Carla Paiva'),
  }
  return employees;
};
console.log(newEmployees())
