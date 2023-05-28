import { useState } from 'react';

function Form () {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [module, setModule] = useState();


  return (
      <form>
        <label htmlFor='name'>
          Nome: 
          <input
            name='name'
            type='text'
            placeholder='Digite seu Nome'
            onChange= {({ target }) => setName (target.value)}
            value= { name }
          />
        </label>
        <label htmlFor='age'>
          Age: 
          <input
            name='age'
            type='number'
            placeholder='Digite sua Idade'
            onChange= {({ target }) => setAge (target.value)}
            value= { age }
          />
        </label>
        <label htmlFor='age'>
          City : 
          <input
            name='ciyy'
            type='text'
            placeholder='Digite sua Cidade'
            onChange= {({ target }) => setCity (target.value)}
            value= { city }
          />
        </label>
        <label htmlFor="fundamentals">
          Fundamentos
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Fundamentos"
            checked={module === 'Fundamentos'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="fundamentals">
          Ciências da Computação
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Ciências da Computação"
            checked={module === 'Ciências da Computação'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="fundamentals">
          Front-End
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Front-End"
            checked={module === 'Front-End'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor="fundamentals">
          Back-End
          <input
            type="radio"
            id="fundamentals"
            name="module"
            value="Back-End"
            checked={module === 'Back-End'}
            onChange={({ target }) => setModule(target.value)}
          />
        </label>
        <label htmlFor='button'>
          <button
            type='button'
          >
            Submit
          </button>
        </label>
        
      </form>
  )
}

export default Form;
