function Footernav({name,li1,li2,li3,li4,li5}) {
    return (
        <div className='text-light'>
            <h2 className="fs-4 text-secondary">{name}</h2>
            <ul className="navbar-nav ">
                <li className="nav-item fs-7">
                <a className="nav-link active text-light" aria-current="page" href="#"> {li1} </a>
                </li>
                <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#"> {li2} </a>
                </li>
                <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#"> {li3} </a>
                </li>
                <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#"> {li4} </a>
                </li>
                <li className="nav-item ">
                <a className="nav-link active text-light" aria-current="page" href="#"> {li5} </a>
                </li>
                
            </ul>
        </div>
    )
}

export default Footernav