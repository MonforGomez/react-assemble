import { Routes, Route } from "react-router";
import { NavBar } from "./components/ui";
import { HomePage, HeroesPage, HeroeDetailPage, GamesPage, GamesDetailPage, MoviesPage, MoviesDetailPage } from "./pages/index.jsx";


function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/characters" element={<HeroesPage/>}/>
      <Route path="/characters/:slug" element={<HeroeDetailPage/>}/>
      <Route path="/games" element={<GamesPage/>}/>
      <Route path="/games/:slug" element={<GamesDetailPage/>}/>
      <Route path="/movies" element={<MoviesPage/>}/>
      <Route path="/movies/:id" element={<MoviesDetailPage/>}/>
    </Routes>
  </>
  )
}

export default App; 
