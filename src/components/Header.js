import logo from '../assets/Airbnb_Logo.png'

function Header(){
    return(
      <nav className="nav-bar">
        <img src={logo} className='nav-logo' alt='react-logo' />
      </nav>
    )
  }

export default Header