import { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisitedCountry,handleVisitedFlags}) => {
    const {name , flags,area,cca3} = country;

    const [visited,setVisited] = useState(false)

    const handleVisited = () =>{
        setVisited(!visited)
    }


    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h4 style={{color:visited ? 'red':'purple'}}>Name: {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Area:{area}</p>
            <p><small>Code:{cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button><br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flag</button><br />
            <button  style={{backgroundColor: visited ? 'blue' : 'black'}} onClick={handleVisited}>{visited ?'Visited' : 'Going'}</button>
            {visited ? "I have visited this country": 'I want to visit'}
        </div>
    );
};

export default Country;