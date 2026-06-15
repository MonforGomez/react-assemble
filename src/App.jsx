import { Routes, Route } from "react-router";
import { NavBar } from "./components/ui";
import { HomePage, HeroesPage, HeroeDetailPage } from "./pages/index.jsx";


function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/characters" element={<HeroesPage/>}/>
      <Route path="/characters/:slug" element={<HeroeDetailPage/>}/>
    </Routes>
  </>
  )
}

export default App; 
