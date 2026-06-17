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
    genres: game.genre,
  };
}

export async function listGames() {
  const { data } = await http.get("/games", {
    params: {
      search: "marvel",
    },
  });
  return data.results?.map((game) => parseGame(game));
}

export async function detailGame(id) {
    const { data } = await http.get(`/games/${id}`)
    return parseGame(data); 
}