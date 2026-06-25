import axios from "axios";
import { baseMockURL } from "../../mock";

const mockURL = axios.create({
  baseURL: baseMockURL,
});

export async function register(user) {
    const { data } = await mockURL.post("/users", user);
    return data;
}


export async function login(user) {
    const { data } = await mockURL.post("/sessions", user);
    return data; 
}