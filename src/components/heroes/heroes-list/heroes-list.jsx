import { HeroesCard } from "../index";

function HeroesList({ heroes }) {
  return (
    <div className="container my-5">
      <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 justify-content-center">
        {heroes?.map((hero) => (
          <div className="col" key={hero.id}> 
            <HeroesCard hero={hero} />
          </div>
        ))}
      </div>
    </div> 
  ); 
}

export default HeroesList;