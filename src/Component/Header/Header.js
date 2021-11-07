import Formbutton from "./Form/Formbutton"
import Navigation from "./Navigation"
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
  <div className="container-fluid">
    <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="AchieversIT_logo" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Navigation/>
      <button className='btn btn-info' ><Link style={{textDecoration:'none',color:'black'}} to='/RegistrationForm'>REGISTER</Link></button>
      <button className='btn btn-info'><Link style={{textDecoration:'none',color:'black'}} to='/LoginForm'>LOGIN</Link></button>
  </div>
  
</nav>
        </div>
    )
}

export default Header