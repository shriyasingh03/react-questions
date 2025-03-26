import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const [show, setShow] = useState(true);

  return(
  <div>
    <button onClick={()=> setShow(!show)}>
      {show ? "Hide" : " Show"}Text
    </button>

    {show && <p>Hello! You can see me now.</p>}
  </div>
  
  ) 



}

export default App
