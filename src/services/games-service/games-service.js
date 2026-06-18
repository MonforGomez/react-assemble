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
    platforms: game.platforms ? game.platforms.map(p => p.platform.name).join(", ") : "Unknown Platform"
  };
}

/*
return {
    id: game.id,
    slug: game.slug,
    name: game.name,
    picture: game.background_image,
    rating: game.rating,
    genres: game.genres,
    
    // Mapea el array, extrae los nombres y los junta con una coma
    platform: game.platforms  ? game.platforms.map(p => p.platform.name).join(", ")  : "Unknown Platform"
  };
*/

export async function listGames() {
  const [page1, page2, page3, page4, page5] = await Promise.all([
    http.get("/games", {params: { search: "marvel", page: 1, page_size: 40 }}),
    http.get("/games", {params: { search: "marvel", page: 2, page_size: 40 }}),
    http.get("/games", {params: { search: "marvel", page: 3, page_size: 40 }}),
    http.get("/games", {params: { search: "marvel", page: 4, page_size: 40 }}),
    http.get("/games", {params: { search: "marvel", page: 5, page_size: 40 }}),  
  ]);
  
  const allResults = [
    ...(page1.data.results) || [],
    ...(page2.data.results) || [],
    ...(page3.data.results) || [],
    ...(page4.data.results) || [],
    ...(page5.data.results) || []
  ]
    
  return allResults.map((game) => parseGame(game));
}

export async function detailGame(slug) {
    const { data } = await http.get(`/games/${slug}`)
    return parseGame(data); 
}