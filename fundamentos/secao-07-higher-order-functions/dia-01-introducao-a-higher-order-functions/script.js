const emailListInData = [ 
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

emailListInData.forEach((email, index) => {
  emailListInData[index] = `O email ${email} está cadastrado em nosso banco de dados!`
});

console.log(emailListInData[1])