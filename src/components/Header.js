import "./Header.css";

import { NavLink } from "react-router-dom"

import { FaHome } from 'react-icons/fa';

function Header(){
    return(
        <header className="homeHeader">
            <NavLink to = "/">
                <FaHome className= 'faHome' color="white" size={30}/>
            </NavLink>    
        </header>
    )
}

export default Header;