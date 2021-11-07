import{Link} from 'react-router-dom'
function Navigation() {
    return (
        <div>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item m-4">
          <Link className="nav-link active text-light" aria-current="page" to="/">React JS</Link>
        </li>
        <li className="nav-item m-4">
          <Link className="nav-link text-light" to='/AngularJS'>Angular JS</Link>
        </li>
        <li className="nav-item m-4">
          <Link className="nav-link text-light" to="/VueJS">Vue JS</Link>
        </li>
        <li className="nav-item m-4">
          <Link className="nav-link text-light" to="/WebDevelopment">Web Development</Link>
        </li>
        <li className="nav-item m-4">
          <Link className="nav-link text-light" to="/UIDevelopment">UI Development</Link>
        </li>
      </ul>
    </div>
        </div>
    )
}

export default Navigation