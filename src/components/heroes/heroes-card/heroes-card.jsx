



function HeroesCard({ heroe: { name, images, powerstats }}) {
  return (
    <div className="card text-bg-dark" style={{ maxWidth: "200px" }}>
      <img src={images.md} className="card-img" alt={name} />
      <div className="card-img-overlay d-flex gap-2 justify-content-between align-items-end">
        <h6 className="card-title m-0">
          {name}
        </h6>
        <span>
        Power:{powerstats.power} 
        Strength:{powerstats.strength} 
        Combat: {powerstats.combat}</span>
      </div>
    </div>
  );
}

export default HeroesCard;
