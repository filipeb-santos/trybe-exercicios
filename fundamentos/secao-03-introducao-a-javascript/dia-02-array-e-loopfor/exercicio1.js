let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//for (let index = 0; index < numbers.length; index += 1){
//    console.log(numbers[index]);
//}

//let result = 0;
//for(let index = 0; index < numbers.length; index += 1){
//    result += numbers[index];
  
//}

//console.log(result);

/*let result = 0;
let media = 0;
for (let index = 0; index < numbers.length; index += 1){
    result += numbers[index];
    media = result / numbers.length;
}

if(media > 20){
    console.log("Valor maior que 20");
}
else{
    console.log("Valor menor ou igual a 20");
}*/
/*let higherNumber = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > higherNumber){
        higherNumber = numbers[index];
    }
}
console.log(higherNumber)*/

/*let lowerNumber = numbers[0];
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < lowerNumber){
        lowerNumber = numbers[index];
    }
}
console.log(lowerNumber)*/
numbers = [];
let divisionper2 = [];
for (let index = 0; index <= 25; index += 1 ){
    numbers.push(index);

}
for(let index = 0; index < numbers.length; index += 1 ){
    divisionper2.push(index/2);
}

console.log(divisionper2)