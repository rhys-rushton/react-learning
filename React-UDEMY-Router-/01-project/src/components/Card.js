import './Card.css'

const Card = (props) => {

    const cssName = 'card ' + props.className


    return (
        <div className = {cssName}>{props.children}</div>
    )
}

export default Card;