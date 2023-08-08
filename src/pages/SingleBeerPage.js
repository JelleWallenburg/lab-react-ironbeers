import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import DetailedBeer from "../components/DetailedBeer";
import axios from "axios";

import Header from "../components/Header";

function SingleBeerPage() {
  const [beer, setBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { beerId } = useParams();

  useEffect(() => {
    async function fetchSingleBeer() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data);
        setIsLoading(false);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleBeer();
  }, [beerId]);
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

export default SingleBeerPage;
