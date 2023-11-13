import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)    // let [variable , function]   HOOK

  const addValue = () => {
    if (counter == 0) {
      setcounter(0);
    }

    else {
      setcounter(counter + 1);
    }
  }

  const decValue = () => {
    if (counter <= 0) {
      setcounter(0)

    }
    else {
      setcounter(counter - 1);
    }
  }


  return (
    <>
      <h1>02 Counter Vite project</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  )
}

export default App
