import Logo from '../../assets/logo1.png'
import { NavLink } from 'react-router-dom'
import '../Header/header.css'

function Header() {
    return (
      <header className='header'>
        <img className="logo" src={Logo} alt="logo" />
        <nav className='nav'>
          <NavLink  to="/portfolio-mes-projet">Portfolio</NavLink>
          <NavLink to="#">A propos</NavLink>
        </nav>
      </header>
    )
  }
  export default Header