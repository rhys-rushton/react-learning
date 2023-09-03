import '../index.css'


const Concept = (props) => {
    
    return( <ul id="concepts">
    <li className="concept">
      <img src={props.data[0].image} alt="TODO: TITLE" />
      <h2>{props.data[0].title}</h2>
      <p>{props.data[0].description}</p>
    </li>
    <li className="concept">
      <img src={props.data[1].image} alt="TODO: TITLE" />
      <h2>{props.data[1].title}</h2>
      <p>{props.data[1].description}</p>
    </li>
    <li className="concept">
      <img src={props.data[2].image} alt="TODO: TITLE" />
      <h2>{props.data[2].title}</h2>
      <p>{props.data[2].description}</p>
    </li>
    </ul>)

} 


export default Concept; 