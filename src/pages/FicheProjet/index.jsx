import DataProjet from '../../data/projets.json'
import { useParams, Navigate } from 'react-router-dom'
import '../FicheProjet/ficheProjet.css'
import Tag from '../../components/Tags'
import Collapse from '../../components/Collapse'

//import Banner from '../../components/Banner'
// import Carrousel from '../../components/Carrousel'

function FicheProjet() {
  /** extrait l'ID du logement à partir de l'URL */
  const id = useParams()

  /* recherche l'objet de logement correspondant à cet ID dans les données importées.*/
  const ficheProjet = DataProjet.find((projet) => projet.id === id.id)

  /* récup array Tag */
  const tagsProjet = ficheProjet?.technologiesUsed.map(
    (technologiesUsed, index) => {
      return <Tag key={index} nom={technologiesUsed} />
    },
  )

  /* récup array equipement// chaque itération de la boucle la fonction retourne un élément de liste (<li>)  */
  const missionsProjet = ficheProjet?.missions.map((missions, index) => {
    return <li key={index}>{missions}</li>
  })

  const skillsProjet = ficheProjet?.skillsAcquired.map(
    (skillsAcquired, index) => {
      return <li key={index}>{skillsAcquired}</li>
    },
  )

  if (!ficheProjet) {
    return <Navigate replace to="/Error404" />
  }

  const getImagePath = (imageName) => {
    return require(`../../${imageName}`)
  }
  return (
    <div className="mainFiche">
      <div className="title">
        <img className="cloud" src={getImagePath(ficheProjet?.image)} alt="" />
        <h1> {ficheProjet?.title}</h1>
        <ul className="list">
          <li>{ficheProjet?.periode[0]}</li>
          <li>{ficheProjet?.periode[1]}</li>
        </ul>
      </div>
      <div className="infoProjet">
        <h2>Description du projet :</h2>
        <span className="nomProjet">{ficheProjet?.description}</span>
        {ficheProjet?.figmalink && (
          <span className="nomProjet">
            <a
              href={ficheProjet?.figmalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Maquettes
            </a>
          </span>
        )}
      </div>
      <div className="linkCode">
        <a
          href={ficheProjet?.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lien code source Github
        </a>
        {ficheProjet?.liveLink && (
          <a
            href={ficheProjet?.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live link Github
          </a>
        )}
      </div>

      <div className="TagContent">
        <div className="tagsLogement">{tagsProjet}</div>
      </div>

      <div className="description-equipements">
        <Collapse titre="Taches réalisées" description={missionsProjet} />
        <Collapse titre="Compétences acquises" description={skillsProjet} />
      </div>
    </div>
  )
}

export default FicheProjet
