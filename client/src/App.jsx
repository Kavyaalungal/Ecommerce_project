
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
// import Register from "./components/register/Register"
import Login from "./components/login/Login"
import Navigation from "./components/navigation/Navigation"
import Home from "./components/home/Home"

function App() {
 
return(
  <>
  <BrowserRouter>
  <Navigation/>
  <Routes>
    <Route index element={<Home/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
  </Routes>
  
  </BrowserRouter>
    {/* <Register/> */}
 
  </>
 
)

}

export default App
