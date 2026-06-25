import { setupWorker } from "msw/browser";
import { HttpResponse, http } from "msw";
import { heroes } from "./data-heroes";

export const baseMockURL = "http://api.heroes.mock.org";

const LS_USERS_KEY = "users";
const users = self.localStorage.getItem(LS_USERS_KEY)
  ? JSON.parse(self.localStorage.getItem(LS_USERS_KEY))
  : [];

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

const handleUsersRegister = http.post(`${baseMockURL}/users`, async (data) => {
  const user = await data.request.json();
  console.log("New mock user:", user);
  
  const isAlreadyRegistered = users.some((registeredUser) => registeredUser.username === user.username);
    if (isAlreadyRegistered) {
      return HttpResponse.json(
        {
          message: "invalid user register",
          errors: {
            username: "Username is already taken"
          }
        },
        { status: 400 }
      )
    } else {
      user.id = self.crypto.randomUUID();
      users.push(user);
      self.localStorage.setItem(LS_USERS_KEY, JSON.stringify(users));
      return HttpResponse.json(user, { status: 201 });
    }
});


const handleLogin = http.post(`${baseMockURL}/sessions` , async (data) => {
  const { username, password } = await data.request.json(); 

  const user = users.find((registeredUser) => 
    registeredUser.username === username && registeredUser.password === password
  );
 
  if (!user) {
    return HttpResponse.json(
      {
        message: "Unauthorized", 
        errors: {
          password: "Invalid username or password"
        }
      }, 
      { status: 401 }
    )
  } else {
    const sessionUser = { ...user };
    delete sessionUser.password; 
    return HttpResponse.json(sessionUser, { status: 201 })
  }
})

export const worker = setupWorker(
  handleHeroesList, 
  handleCharacter, 
  handleLogin, 
  handleUsersRegister,
);
