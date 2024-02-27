import DataProjet from '../../data/projets.json'
import { useParams, Navigate } from 'react-router-dom'
import '../FicheProjet/ficheProjet.css'
import Tag from '../../components/Tags'
import Collapse from '../../components/Collapse'
import Carrousel from '../../components/Carrousel'


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
  return (
    <div className="mainFiche">
      <Carrousel pictures={ficheProjet?.pictures.map((picture) => require('../../' + picture))} />
{console.log(ficheProjet?.pictures)}
      <div className="title">
        <h1> {ficheProjet?.title}</h1>
      </div>
      <div className="infoPropietaire">
        <span className="nomProprietaire">{ficheProjet?.description}</span>
      </div>
      <div className="TagContent">
        <div className="tagsLogement">{tagsProjet}</div>
      </div>

      <div className="description-equipements">
        <Collapse titre="Missions" description={missionsProjet} />
        <Collapse titre="Compétences acquises" description={skillsProjet} />
      </div>
    </div>
  )
}

export default FicheProjet
