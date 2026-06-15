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
}

export async function getAllCharacters() {
  const { data } = await mockURL.get("/characters");
  return data?.map((character) => parseCharacter(character));
}

export async function getCharacter(slug) {
    const { data } = await mockURL.get(`/characters/${slug}`);
    return parseCharacter(data); 

}