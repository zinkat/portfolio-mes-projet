import '../Banner/banner.css'

function Banner({ image, texte, title }) {
  return (
    <section className="bannerContainer">
      <img className="bannerImg" src={image} alt="Bannière" />
      <div className="darkenMode"></div>
      <h1 className="bannerTitle"> {title}</h1>
      <span className="bannerText">{texte}</span>
    </section>
  )
}

export default Banner
