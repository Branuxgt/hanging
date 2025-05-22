import {letters} from './helpers/letters'
import './App.css'
import { HangImage } from './components/HangImage'

function App() {
 
  return(
  <div className='App'>
    
    
    {/*Imagenes */}
    <HangImage imageNumber={23}/>
    
    {/*Palabra oculta  */}

    <h3>---------------------------</h3>
    {/*Contador de intentos Imagenes */}

    <h3>Intentos: 0</h3>
    {/*Botones */}

    {
      letters.map((letters)=> (
        <button
          key={letters}>
            {letters}
        </button>
      ))
    }


  </div>
  )
}

export default App
