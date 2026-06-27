import axios from "axios";
import { baseMockURL } from "../../mock";

const mockURL = axios.create({
  baseURL: baseMockURL,
});

function parseCharacter(character) {
  return {
    id: character.id,
    name: character.name,
    picture: character.images?.md,
    slug: character.slug,
    stats: character.powerstats ?? {}, //object
    gender: character.appearance?.gender,
    race: character.appearance?.race,
    appearance: character.appearance ?? {}, //height(arr),weight(arr), eyeColor,hairColor
    fullName: character.biography?.fullName,
    aliases: character.biography?.aliases, //arr
    placeofbirth: character.biography?.placeOfBirth,
  }
};

export async function getAllCharacters({ page = 1 }) {
  const { data } = await mockURL.get("/characters", {
    params: {
      page: page,
    }
  });

  const parsedCharacter = data?.map((character) => parseCharacter(character));
  const pageSize = 20; 
  const totalPages = Math.ceil(data.count / pageSize); 

  return {
    character: parsedCharacter, 
    totalPages: totalPages,
  }
};

export async function getCharacter(slug) {
    const { data } = await mockURL.get(`/characters/${slug}`);
    return parseCharacter(data); 
};

export const searchCharacters = async (query) => {
  const { data } = await mockURL.get('/characters') 
  console.log("primer personaje:", data[0]) // ← mira qué estructura tiene
  console.log("query:", query)
  return data.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    .map(c => parseCharacter(c)) 
}; 