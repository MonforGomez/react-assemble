import axios from "axios";

const http = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_APIKEY,
  },
});

function parseGame(game) {
  return {
    id: game.id,
    slug: game.slug,
    name: game.name,
    picture: game.background_image,
    rating: game.rating,
    genres: game.genres,
    platforms: game.platforms ? game.platforms.map(p => p.platform.name).join(", ") : "Unknown Platform",
  };
}

export async function listGames({search = "marvel", page = 1}) {
  const searcher = search || "marvel"; 
 
  const { data } = await http.get("/games", {
    params: { 
      search: searcher, 
      page: page 
    }
  });
  const parsedGames = data.results.map((game) => parseGame(game))

  const pagesSize = 20
  const totalPages = Math.ceil(data.count / pagesSize)
  return {
    games: parsedGames,
    totalPages: totalPages,
  }
}

export async function detailGame(slug) {
    const { data } = await http.get(`/games/${slug}`)
    return parseGame(data); 
}


export const searchGames = async (query) => {
  const { data } = await http.get("/games", {
    params: { search: query }
  })
  return data.results?.map(g => parseGame(g))
}
