import '../styles.scss'
const Starships = ({name,make,crew}) => {

    return(  
            <div className="ship-card">
                <h2>{name}</h2>
                <h3>Manufacture: {<br/>}</h3>
                <h3>{make}</h3>
                <h4>Crew: {crew}</h4>
            </div>    
)
      }
  
  export default Starships;
  