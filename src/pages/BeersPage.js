import { useState, useEffect } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

import Header from "../components/Header";

function BeersPage(){
    const [beers, setBeers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>{
        async function fetchBeers(){
            try{
                const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
                setBeers(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
            }
        }
        fetchBeers()
    }, [beers])

    if(beers.length===0 && isLoading=== true){
        return (
        <FaSpinner/>
        )
    }

    return (
        <div>
            <Header/>
            <main>
                {beers.map(beer => {
                return( 
                    <div className="oneBeer" key={beer._id}>
                        <img className="oneBeerImage" src={beer.image_url} alt= 'beer'/> 
                        <div className="beerInfo">
                            <Link to= {`/beer/${beer._id}`}><h1>{beer.name}</h1></Link>
                            <h2>{beer.tagline}</h2>
                            <p>Created by: {beer.contributed_by}</p> 
                        </div>
                    </div>
    
                ) 
                })}
            </main>
        </div>
    )
}

export default BeersPage;