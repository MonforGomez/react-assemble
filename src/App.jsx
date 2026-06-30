import { Routes, Route } from "react-router";
import { NavBar } from "./components/ui";
import { HomePage, HeroesPage, HeroeDetailPage, GamesPage, GamesDetailPage, MoviesPage, MoviesDetailPage, LoginPage, RegisterPage, SearchPage } from "./pages/index.jsx";
import PrivateRoute from './guards/private-route';

function App() {
  return (
  <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/characters" element={<PrivateRoute><HeroesPage/></PrivateRoute>}/>
      <Route path="/characters/:slug" element={<PrivateRoute><HeroeDetailPage/></PrivateRoute>}/>
      <Route path="/games" element={<PrivateRoute><GamesPage/></PrivateRoute>}/>
      <Route path="/games/:slug" element={<PrivateRoute><GamesDetailPage/></PrivateRoute>}/>
      <Route path="/movies" element={<PrivateRoute><MoviesPage/></PrivateRoute>}/>
      <Route path="/movies/:id" element={<PrivateRoute><MoviesDetailPage/></PrivateRoute>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
    </Routes>
    
  </>
  )
}

export default App; 
