import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting({name}){
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <div>
  <h1>functional component</h1>
  <Greeting name={"sony"}></Greeting>
  </div>



}

export default App
