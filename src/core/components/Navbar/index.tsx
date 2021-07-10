import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss'

const Navbar = () => (
    <nav className="bg-primary main-nav">
        <Link to="/" className="logo-text">Bootcamp DevSuperior</Link>
    </nav>
);

export default Navbar;