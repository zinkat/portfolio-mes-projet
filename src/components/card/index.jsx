import '../card/card.css'
function Card({ image, titre }) {
    return (
      <div className="containerCard" >
        <img className="cardImg" src={image} alt={titre} />
        <div className='darken'></div>
        <span className="cardTitre">{titre}</span>
      </div>
    )
  }
  
  export default Card