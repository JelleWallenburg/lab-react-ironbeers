function DetailedBeer({beer}){
    return(
        <div className="detailedBeer">
        <img src={beer.image_url} alt='beer'/>
        
        <div className="beerTitle">
          <div>
            <h1> {beer.name}</h1>
            <h2> {beer.tagline}</h2>
          </div>

          <div>
            <h2> {beer.attenuation_level}</h2>
            <p>{beer.first_brewed}</p>
          </div>
        </div>
    
        
        <p>{beer.description}</p>
        <h3>{beer.contributed_by}</h3>
      </div>
    )

}

export default DetailedBeer;