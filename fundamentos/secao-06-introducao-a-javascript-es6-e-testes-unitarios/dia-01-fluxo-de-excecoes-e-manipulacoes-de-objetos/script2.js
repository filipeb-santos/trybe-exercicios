const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addNewKey = (obj, key, value) => {
    obj[key] = value

  };
addNewKey(lesson2,'turno','noite');
console.log(lesson2);

const keyList = (obj) => {
    const array = Object.keys(obj);
    return array;
}
console.log(keyList(lesson1));

const objectLenght = (obj) => {
    const length = Object.keys(obj).length;
    return length;
}
console.log(objectLenght(lesson1));

const valueList = (obj) => {
    const values = Object.values(obj);
    return values;
}
console.log(valueList(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})

console.table(allLessons)

const getNumberOfStudents = (obj) => {
    let sum = 0;
    
}