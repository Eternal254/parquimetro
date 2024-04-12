import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = () => {
    return (
        <div>
            <nav class="nav">
                <div class="nav-header">
                    <h1 class="nav-title">Parquimetro</h1>
                </div>
                <div class="nav-links">
                    <a href="/" class="nav-button">Home</a>
                    <a href="/about" class="nav-button">About</a>
                </div>
            </nav>
                <hr />
            <Outlet />
        </div>

    );
}

export default Layout;
