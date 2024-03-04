import '../Footer/footer.css'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'


function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <p>&copy; 2024 zineb Katim</p>
        <div className="socialLinks">
          <a href="https://github.com/zinkat?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img className='logofooter' src={Github} alt="lien github" />
          </a>
          <a href="https://www.linkedin.com/in/zineb-katim/" target="_blank" rel="noopener noreferrer">
           <img className='logofooter' src={Linkedin} alt="lien linkedin" /> 
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;