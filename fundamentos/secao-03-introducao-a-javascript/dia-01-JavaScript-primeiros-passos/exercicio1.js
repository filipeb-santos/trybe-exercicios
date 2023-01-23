let a = 12;
let b = 18;
let sum = a + b;
let sub = a - b;
let times = a * b;
let div = a / b;
let rest = a % b;

//console.log(sum)
//console.log(sub)
//console.log(times)
//console.log(div)
//console.log(rest)

/*let num1 = 14;
let num2 = 200;
let num3 = 18;

if(num1 > num2 && num1 > num3){
    console.log(num1)
}
else if(num2 > num1 && num2 > num3){
    console.log(num2)
}
else {
    console.log(num3)
}
*/
/*let valor = 92;
if(valor > 0){
    console.log("positive")
}
else if (valor < 0){
    console.log("negative")
}
else{
    console.log("zero")
}
*/
/*let ang1 = 75;
let ang2 = 34;
let ang3 = 71;
let isTriangle = ang1 + ang2 + ang3;
if(isTriangle == 180){
    isTriangle = true
}
else{
    isTriangle = false
}
console.log(isTriangle)*/
let peca2 = "KNIGHT";
let peca = peca2.toLowerCase();

switch (peca){
    case "bishop":
        console.log("diagonals");
    break;
    case "knight":
        console.log("shape of an 'L'");
    break;
    case "tower":
        console.log("vertical or horizontal");
    break;
    case "queen":
        console.log("all directions");
    break;
    case "king":
        console.log("one square from it");
    break;
    case "pawn":
        console.log("forward");
    break;
    default:
         console.log("there is no such piece")



}
    


