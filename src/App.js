// import Starships from "./components/Starships";
// import { useState, useEffect } from "react";
import ShipDisplay from "./components/ShipDisplay";
import './styles.scss'
import Header from "./components/Header";
function App() {
//   const [ships, setShips] = useState();

//   // async/await takes care of itself
//   const getShip = async () => {
//     // making api Call
//     const response = await fetch(`https://swapi.dev/api/starships`);
//     // converting the response to js object
//     const data = await response.json();
//     // updating the state to the object
//     // console.log(data);

//     setShips(data);
//   };
    

// // renders when page loads
//   useEffect(() => {
//     getShip();
//   }, []);

  
// // we must wait for the Promise to clear before attempting to run anything on it.
// // before it hits this if it's probably null or undefined
//   if (ships) {
//     var shipSet = ships.results.map((ship,index) => {
//       console.log(ship.crew)
//       return <Starships name={ship.name} make={ship.manufacturer} crew={ship.crew} key={index}/>
//     //  var shipSet = <ShipDisplay data={ships} />
  
//     })
//     } else {
//   return "Howdy Partner"
// }
// app display
    return (
    <div className="App">
      <Header />
      <ShipDisplay className="ships-container"/>
    </div>
  )



}

export default App;
