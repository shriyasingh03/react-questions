import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 3️⃣ How can you conditionally render content inside a functional component?
// 💡 Create a component that checks if a user is logged in (using a boolean prop) and displays either "Welcome, User!" or "Please log in."

function WelcomeMessage({isLoggedIn}){
  return(
    <div>
      {isLoggedIn ? <h2>Welcome, User!</h2> : <h2>Please log in.</h2>}
    </div>
  )
}

function App() {
  return(
  <div>
    <WelcomeMessage isLoggedIn={false} />
  </div>
  ) 



}

export default App
