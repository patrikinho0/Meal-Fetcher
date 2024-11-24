import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
        // All the needed content that is displayed inside the Navbar
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="./images/mealGetterLogoNoBG.png" alt="mealGetter" width="80" height="60" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-4">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/meals" className="nav-link px-4">Meals</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link px-4">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link px-4">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
