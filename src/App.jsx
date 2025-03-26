import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// How do you create a functional component that accepts multiple props (name, age) and displays them?
// 💡 Modify the Greeting component to take both name and age as props and display them.
function Greeting({name,age}){
  return <><h2>Hello, {name}</h2>

  <h2>Age, {age}</h2></>
  
}

function App() {
  return <div>
  <h1>functional component</h1>
  <Greeting name={"GoraPakora"} age={5000}></Greeting>
  </div>



}

export default App
