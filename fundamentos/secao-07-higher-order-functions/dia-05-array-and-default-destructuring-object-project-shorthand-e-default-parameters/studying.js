const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  return (a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [firstNumber, secondNumber, thirdNumber] = primeNumbers;

console.log(sum(firstNumber,thirdNumber));


let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [comida, animal, bebida]

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...pares] = numerosPares

console.log(pares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
