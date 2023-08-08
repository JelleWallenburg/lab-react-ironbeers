import { Link } from 'react-router-dom'

import beer from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

function HomePage(){
    return(
        <div>
            <div className='beerPage'>
                <img src={`${beer}`} alt="beer" className='beerImage'/>
                <Link to={'/beers'}><h1>All Beers</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus ut augue eu efficitur. Mauris mauris felis, dapibus sed justo eget, pharetra congue erat. Sed et imperdiet erat. Vivamus augue felis, porta sit amet gravida vitae, blandit ac elit. Ut libero arcu, consectetur et pellentesque et, sagittis at nunc. Cras tempor purus eu sagittis efficitur. Mauris id diam congue, ornare nibh non, molestie velit. Aliquam ipsum diam, consectetur nec convallis nec, aliquam non lorem. Fusce consectetur massa ante, quis pharetra elit ullamcorper vitae.</p>
            </div>
            <div className='beerPage'>
                <img src={`${newBeer}`} alt="new-beer" className='beerImage'/>
                <Link to={'/random-beer'}><h1>Random Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus ut augue eu efficitur. Mauris mauris felis, dapibus sed justo eget, pharetra congue erat. Sed et imperdiet erat. Vivamus augue felis, porta sit amet gravida vitae, blandit ac elit. Ut libero arcu, consectetur et pellentesque et, sagittis at nunc. Cras tempor purus eu sagittis efficitur. Mauris id diam congue, ornare nibh non, molestie velit. Aliquam ipsum diam, consectetur nec convallis nec, aliquam non lorem. Fusce consectetur massa ante, quis pharetra elit ullamcorper vitae.</p>
            </div>
            <div className='beerPage'>
                <img src={`${randomBeer}`} alt="random-beer" className='beerImage'/>
                <Link to={'/new-beer'}><h1>New Beer</h1></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rhoncus ut augue eu efficitur. Mauris mauris felis, dapibus sed justo eget, pharetra congue erat. Sed et imperdiet erat. Vivamus augue felis, porta sit amet gravida vitae, blandit ac elit. Ut libero arcu, consectetur et pellentesque et, sagittis at nunc. Cras tempor purus eu sagittis efficitur. Mauris id diam congue, ornare nibh non, molestie velit. Aliquam ipsum diam, consectetur nec convallis nec, aliquam non lorem. Fusce consectetur massa ante, quis pharetra elit ullamcorper vitae.</p>
            </div>
        </div>
    )
}

export default HomePage