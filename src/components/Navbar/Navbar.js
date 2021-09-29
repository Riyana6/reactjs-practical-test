import React from "react";
import {Link} from 'react-router-dom';
import "./Navbar.css"
import { useSelector } from "react-redux";

const Navbar = () => {
    

        const count = useSelector((state) => state.cart.items);

        let cartCount
        
        cartCount = count.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue.count;
        }, 0);
    
        return (
            <nav className ="navbar">
                <ul className="navbarLinks">
                    <li>
                        <Link to="/" className="cartLink">
                            shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart" className="cartLink">
                            <span>
                                <i class="fas  fa-shopping-cart"></i>
                                <span className="cartlogoBadge">{cartCount}</span>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
}

export default Navbar;
