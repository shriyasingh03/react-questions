import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// How do you use useState inside a functional component to store and update a counter?
// 💡 Implement a simple counter component with a "Increase" button that updates the counter using useState.



function App() {
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count+1)
  }

  return(
  <div>
    <h2>Counter: {count}</h2>
    <button onClick={increaseCount}>Increase Counter</button>
  </div>) 



}

export default App
