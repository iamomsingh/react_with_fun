import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter < 20){
      setCounter(++counter)
    }
    console.log("value added");
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(--counter);
    }
   
    console.log("value removed");
  }

  return (
    <>
      <h1>React with fun</h1>
      <h2> Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App


/*
1. ui updation will handle by react.
2. if state value change then ui will not automatically change their value from state.
3. through hooks we can handle the ui updation at instant.
4. how we can do changes to  propagate in ui  in react
2. we are syncing state or ui through react.

*/