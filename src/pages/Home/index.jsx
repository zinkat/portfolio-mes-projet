import Card from '../../components/card/index'
import Banner from '../../components/Banner'
import BannerHome from '../../assets/Home.png'
import '../Home/home.css'
import { NavLink } from 'react-router-dom'
import DataProjet from '../../data/projets.json'

function Home() {

  const getImagePath = (imageName) => {
    return require(`../../${imageName}`);
  };
  return (
    <div className="mainHome">
      
      <Banner
        image={BannerHome}
        title='Bienvenue sur mon portfolio en ligne'
        texte="Explorez un monde de projets créatifs conçus dans le cadre de ma formation. Chaque projet est une pièce de puzzle dans mon parcours d'apprentissage. Découvrez mes réalisations, façonnées avec soin et dévouement. Parcourez les cartes ci-dessous pour un aperçu de mon travail.Prêt à plonger dans mon univers ? Let's dive in!"
      />
      <div className="listCard">
      {DataProjet.map((projet) => (
          <NavLink
            key={projet.id}
            to={'/FicheProjet/' + projet.id + '/#'}
          >
            <Card
              key={projet.id}
              id={projet.id}
              image={getImagePath(projet.image)}
            
              titre={projet.title}
            />

          </NavLink>
        ))}
        
      </div>
    </div>
  )
}

export default Home
