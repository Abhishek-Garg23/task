import React from "react";

const Navbar = (props) => {
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Navbar <span className="badge badge-pill badge-secondary">{props.totalCounter}</span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;