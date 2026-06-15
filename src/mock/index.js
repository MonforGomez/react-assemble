import { setupWorker } from "msw/browser";
import { HttpResponse, http } from "msw";
import { heroes } from "./data-heroes";

export const baseMockURL = "http://api.heroes.mock.org";

const handleHeroesList = http.get(`${baseMockURL}/characters`, () => {
  return HttpResponse.json(heroes);
});
const handleCharacter = http.get(
  `${baseMockURL}/characters/:slug`,
  ({ params }) => {
    const heroId = params.slug.split("-")[0];
    const hero = heroes.find((h) => h.id === Number(heroId));
    if (!hero) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(hero);
  },
);

export const worker = setupWorker(handleHeroesList, handleCharacter);
