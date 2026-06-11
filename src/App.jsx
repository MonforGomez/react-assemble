import { Routes, Route } from "react-router";
import HomePage from "./pages/home-page";
import { NavBar } from "./components/ui";


function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
  </>
  )
}

export default App; 
