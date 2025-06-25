import { useEffect, useState } from 'react';
import {letters} from './helpers/letters';
import './App.css';
import { HangImage } from './components/HangImage';

function App() {

  const [word] = useState('COMPUTADORA');
  const [hiddenWord, setHiddenWord]= useState('_ '.repeat(word.length));
  const [attempts,setAttempts ] = useState(0);
  const [lose, setLose] = useState(false);
  const [won, setWon] = useState(false);

  //Determinar si la persona perdio 
useEffect(()=>{
  if(attempts >= 9){
    setLose(true);
  }
console.log(attempts);
},[attempts]);


//Determinar si la persona perdio 

useEffect(()=>{
  const currentHiddeWord = hiddenWord.split(' ').join('');
  if (currentHiddeWord === word){
    setWon(true);
  }
})

  const checkLetter = (letter:string)=>{
    if (lose) return; 
    if (won) return;

    if(!word.includes(letter)){
      setAttempts( Math.min(attempts+1,9) );
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');
    console.log(hiddenWordArray);

    for(let i = 0;i < word.length;i++){
      if(word[i] === letter){
        hiddenWordArray[i] = letter;
      }
    }
    setHiddenWord(hiddenWordArray.join(' '))

  }

  return(
  <div className='App'>
    
    
    
    {/*Imagenes */}
    <HangImage imageNumber={attempts}/>
    
    {/*Palabra oculta  */}

    <h3> {hiddenWord} </h3>
    {/*Contador de intentos Imagenes */}

    <h3>Intentos: {attempts}</h3>

    {/*Mensaje si perdio*/}
    {
      (lose)
      ? <h2>Perdió, la palabra correcta era {word} </h2>
      :''
    }

        {/*Mensaje si gano*/}
    {
      (won)
      ? <h2> Felicidades usted ganó </h2>
      :''
    }

    {/*Botones */}

    {
      letters.map((letter)=> (
        <button
          onClick={()=> checkLetter(letter)}
          key={letter}>
            {letter}
        </button>
      ))
    }


  </div>
  )
}

export default App
