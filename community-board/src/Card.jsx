import './Card.css'

const Card = (props) => {
    return (
        <div class='card-container'>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <a href={props.link}><button>Recipe</button></a>
        </div>
    )
}

export default Card