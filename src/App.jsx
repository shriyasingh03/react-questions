import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// How can you display a "Loading..." message while fetching data?
// 💡 Create a component that initially shows "Loading..." and, after 3 seconds, displays "Data Loaded!".

function App() {
  const [loading, setLoading] = useState(true);


// Why Use useEffect?
// useEffect is necessary here because we need to perform a side effect
//  (waiting for 3 seconds and then updating the state). 
// Without useEffect, the state update (setTimeout) would run on every re-render, causing an infinite loop.
  useEffect(function(){
     setTimeout(function(){
      setLoading(false)
     },3000)
  },[]);

  return(
  <div>
    {loading ? <h1>Loading...</h1>: <h1>Data Loaded</h1>}
  </div>
  ) 



}

export default App
