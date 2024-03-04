import '../Apropos/apropos.css'
import monCv from '../../assets/CV-zineb-katim.pdf'
import HTLM from '../../assets/html-5.png'
import CSS from '../../assets/css-3.png'
import Javascript from '../../assets/script-java.png'
import Reactjs from '../../assets/react.png'
import Redux from '../../assets/redux.png'
import Nodejs from '../../assets/nodejs.png'
import NPM from '../../assets/npm.png'
import Figma from '../../assets/figma.png'
import Notion from '../../assets/notion.png'
import Git from '../../assets/github2.png'

function Apropos() {
  return (
    <div className="mainAbout">
      <div className="drop">
        <h1>Bonjour👋🏻et bienvenue sur ma page !</h1>
        <h2>
          {' '}
          Je m'appelle Zineb et je suis passionnée par le développement
          d'applications web.
        </h2>
        <div>
          J'ai débuté ma carrière après avoir
          obtenu mon DEUG en Sciences Économiques. Pendant 13 ans, j'ai occupé
          des postes en tant que chargée d'audit interne, acquérant ainsi une
          solide expérience dans ce domaine.{' '}
        </div>
        <div>
          En janvier 2022, après m'être installée en France en août de l'année
          précédente, j'ai décidé de changer de cap et de me lancer dans une
          nouvelle aventure professionnelle. Animée par ma passion pour la
          technologie et encouragée par une formation en développement
          web à l'école Ifocop, j'ai entrepris une reconversion dans le
          développement d'applications web.
        </div>

        <div>
          En février 2024, j'ai conclu avec succès ma formation en développement
          d'applications JavaScript React, décrochant ainsi un diplôme stron Titre RNCP niveau 6 (Bac+3)
          de Openclassrooms Cette expérience m'a permis de consolider mes compétences
          techniques et de me spécialiser davantage dans le développement
          front-end. J'ai acquis une expertise dans la création d'interfaces
          utilisateur réactives et esthétiques, ainsi que dans l'analyse des
          besoins des utilisateurs et la résolution de problèmes.
        </div>
        <div>
          Je maîtrise les langages HTML, CSS, JavaScript ainsi que le framework
          React, et j'ai développé une expertise en analyse des besoins des
          utilisateurs et en résolution de problèmes.
        </div>
        <div className='icondiv'>
          <img className="iconetech" src={HTLM} alt="" />
          <img className="iconetech" src={CSS} alt="" />
          <img className="iconetech" src={Javascript} alt="" />
          <img className="iconetech" src={Reactjs} alt="" />
          <img className="iconetech" src={Redux} alt="" />
          <img className="iconetech" src={Nodejs} alt="" />
          <img className="iconetech" src={NPM} alt="" />
          <img className="iconetech" src={Figma} alt="" />
          <img className="iconetech" src={Notion} alt="" />
          <img className="iconetech" src={Git} alt="" />
        </div>
        <div>
          Aujourd'hui, je suis déterminée à relever de nouveaux défis en tant
          que développeuse front-end. Mon parcours professionnel diversifié m'a
          permis de développer des qualités telles que la rigueur,
          l'adaptabilité et le souci du détail, des atouts que je mets au
          service de chaque projet auquel je participe.
        </div>
        <div>
          Ma passion pour la technologie et mon engagement à fournir un travail
          de qualité font de moi une candidate motivée et enthousiaste à l'idée
          de contribuer à des projets innovants.
        </div>
        <div>
          Sur ce site, vous trouverez des exemples concrets de mes réalisations,
          ainsi que des informations détaillées sur mes compétences et mon
          parcours professionnel. N'hésitez pas à me contacter si vous souhaitez
          en savoir plus ou discuter d'opportunités de collaboration.
        </div>
        <div>Je vous remercie pour votre intérêt et votre visite !</div>
        <button>
          <a href={monCv} download>
            Télécharger mon CV
          </a>
        </button>
      </div>
    </div>
  )
}

export default Apropos
