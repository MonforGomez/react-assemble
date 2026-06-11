import axios from "axios";
import { baseMockURL } from "../../mock";

const mockURL = axios.create({
  baseURL: baseMockURL,
});

export async function getAllHeroes() {
  const { data } = await mockURL.get("/characters");
  return data;
}

export async function getHero(id) {
    const { data } = await mockURL.get(`/characters/${id}`);
    return data; 

}