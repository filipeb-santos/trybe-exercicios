/*let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };*/

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: ['golden: 2', 'silver: 3'],
    bestInTheWorld: {   
        years:[2006, 2007, 2008, 2009, 2010, 2018]
    }
}
 
let fullName = player.name + ' ' + player.lastName;
console.log('A jogadora ' + player.name + ' tem ' + player.age + ' anos de idade.')
console.log('A jogadora ' + fullName + ' foi eleita a melhor do mundo por 6 vezes:' + player.bestInTheWorld['years'])