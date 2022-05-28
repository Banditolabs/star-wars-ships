import Starships from './Starships'
import {useState, useEffect} from 'react'
import '../styles.scss'

export default function ShipDisplay () {
    const [ships, setShips] = useState();

    // async/await takes care of itself
    const getShip = async () => {
      // making api Call
      const response = await fetch(`https://swapi.dev/api/starships`);
      // converting the response to js object
      const data = await response.json();
      // updating the state to the object
  
      setShips(data);
    };
      
  
  // renders when page loads
    useEffect(() => {
      getShip();
    }, []);
  
    
  // we must wait for the Promise to clear before attempting to run anything on it.
  // before it hits this if it's probably null or undefined

  const loaded = () => ships.results.map((ship,index) => {
    console.log(ship.crew)
    return <Starships  className="starship" name={ship.name} make={ship.manufacturer} crew={ship.crew} key={index}/>

  })

const loading = () => <h1>Loading...</h1>
//   display
return (
    <div className="starships">
        {ships ? loaded() : loading()}
    </div>
)
}