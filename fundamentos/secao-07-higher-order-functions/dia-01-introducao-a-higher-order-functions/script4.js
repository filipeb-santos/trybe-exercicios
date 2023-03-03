const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const hof = (gabarito, respostasAluno, score)

const score = (rightAnswers, studentAnswers) => {
  let nota = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      nota += 1;
    } else if (studentAnswers[index] === 'N.A'){
      nota += 0;
    }  else {
      nota -= 0.5;
    }
} 
return(nota)
}
console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS));

console.log(hof(RIGHT_ANSWERS, STUDENT_ANSWERS, score(RIGHT_ANSWERS, STUDENT_ANSWERS )))
