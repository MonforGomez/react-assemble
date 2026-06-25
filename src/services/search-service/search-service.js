import { searchCharacters } from '../characters-service/characters-service'
import { searchMovies } from '../movies-service/movies-service'
import { searchGames } from '../games-service/games-service'

export const searchAll = async (query) => {
  const [characters, movies, games] = await Promise.all([
    searchCharacters(query),
    searchMovies(query),
    searchGames(query),
  ])
  return { characters, movies, games }
}