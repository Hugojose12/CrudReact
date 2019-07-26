import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand">React CRUD Products</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/add'} className="nav-link">Add Product</Link>
                </li>
            </ul>
            </div>
        </nav> 
    )
}
