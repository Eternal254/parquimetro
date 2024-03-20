import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <nav className="nav">
            <h1>Testing</h1>
                <div className="nav-links">
                    <Link to="/" className="nav-button">Home</Link>
                    <Link to="/about" className="nav-button">About</Link>
                </div>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default Layout;
