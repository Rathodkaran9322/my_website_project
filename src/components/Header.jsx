import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-light">
                <div className="container-fluid">
                    <NavLink to="/" end className="navbar-brand">
                        My Website
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarDrawer"
                        aria-controls="navbarDrawer"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarDrawer">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink to="/" end className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/service" className="nav-link">
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;