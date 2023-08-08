import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";
import Header from "../components/Header";
import DetailedBeer from "../components/DetailedBeer";

function RandomBeerPage(){
    const [beer, setBeer] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchRandomBeer() {
        try {
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/random`
          );
          setBeer(response.data);
          setIsLoading(false);
          console.log('response', response.data)
          
        } catch (error) {
          console.log(error);
        }
      }
      fetchRandomBeer();
    }, []);
    console.log(beer)
  
    if (beer === null && isLoading === true) {
      return <FaSpinner />;
    }
  
    return (
      <div>
        <Header />
        <DetailedBeer beer={beer}/>
      </div>
    );
}
    
export default RandomBeerPage;