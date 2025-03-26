import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// How can you show different UI elements based on user roles?
// 💡 Implement a component that takes a role prop ("admin", "user", "guest") and:

// Shows "Welcome, Admin!" if the role is "admin"

// Shows "Hello, User!" if the role is "user"

// Shows "Please sign up!" if the role is "guest"



function RoleBasedGreetion({role}){
   let message;
   let style = {};
   switch (role){
    case "admin" :
      message = "Welcome, Admin";
      style = {color:"red" }
      break;
    case  "user":
    message = "Hello, User!";
    style = {color:"blue"}
    break;

    case "guest":
     message = "Please sign up";
     style = { color:"green"}
    break;
    default:
      message = "Role Based Greeting";

   }
   return <h1 style={style}>{message}</h1>
}

function App() {
  const [role, setRole] = useState();

  return(
  <div style={{textAlign: "center", padding:"20px"}}>
   <RoleBasedGreetion role={role}/>
   <button onClick={()=> setRole("admin")} style={{margin: "5px", padding:"10px", borderRadius:"10px", background:"red", color:"white"}}>Set Admin</button>
   <button onClick={() => setRole("user")} style={{ margin: "5px", padding: "10px",borderRadius:"10px" ,background: "blue", color: "white" }}>
        Set User
      </button>
      <button onClick={() => setRole("guest")} style={{ margin: "5px", padding: "10px", borderRadius:"10px",background: "green", color: "white" }}>
        Set Guest
      </button>
  </div>
  ) 



}

export default App
