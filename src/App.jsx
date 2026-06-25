import { Routes, Route } from "react-router";
import { NavBar } from "./components/ui";
import { HomePage, HeroesPage, HeroeDetailPage, GamesPage, GamesDetailPage, MoviesPage, MoviesDetailPage, LoginPage, RegisterPage } from "./pages/index.jsx";
import RegisterForm from "./components/auth/register-form/register-form.jsx";


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
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>

    </Routes>
  </>
  )
}

export default App; 
