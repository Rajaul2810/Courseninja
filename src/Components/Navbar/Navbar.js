import React from 'react';
import { Link } from 'react-router-dom';
//import ClearAllSharpIcon from '@material-ui/icons/ClearAllSharp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  bg-dark">
            <div className="container-fluid nav1" >
                <Link className="navbar-brand nav1"to="#">BdCourse</Link>
               
                <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><FontAwesomeIcon icon={faBars} /></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link active  nav1" aria-current="page"to="/home">Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav1"to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle nav1"to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Profile
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><Link className="dropdown-item "to="#">Action</Link></li>
                                <li><Link className="dropdown-item "to="#">Another action</Link></li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav1"to="/login">Login</Link>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
    );
};

export default Navbar;