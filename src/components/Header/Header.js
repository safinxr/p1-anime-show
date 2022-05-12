import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to='/addanime'>addanime</Link></li>
                <li><Link to='/'>home</Link></li>
            </ul>
        </div>
    );
};

export default Header;