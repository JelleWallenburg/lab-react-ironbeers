import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeerPage(){
    const [name, setName]= useState("");
    const [tagline, setTagline] =useState("");
    const [description, setDescription] =useState("");
    const [first_brewed, setFirst_brewed] =useState("");
    const [brewers_tips, setBrewers_tips] =useState("");
    const [attentuation_level, setAttentuation_level] =useState(0);
    const [contributed_by, setContributed_by] =useState("");

    const navigate= useNavigate();

    const handleSubmit= (e) => {
        e.preventDefault();
        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attentuation_level: attentuation_level,
            contributed_by: contributed_by,
        }
        console.log(newBeer)

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        .then(({data}) =>{
            console.log('post response data', data)
            navigate("/");
        })
    }

    return(
        <div>
            <Header/>
            <form className="addBeer" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>

                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={(e)=> setTagline(e.target.value)}/>

                <label>Description</label>
                <input type="text" name="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>

                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={(e)=> setFirst_brewed(e.target.value)}/>

                <label>Brewers Tips</label>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={(e)=> setBrewers_tips(e.target.value)}/>

                <label>Attenuation Level</label>
                <input type="number" name="attentuation_level" value={attentuation_level} onChange={(e)=> setAttentuation_level(e.target.value)}/>

                <label>Contributed By</label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={(e)=> setContributed_by(e.target.value)}/>

                <button type="submit">ADD NEW</button>
        
            </form>
        </div>
    )
}

export default NewBeerPage;