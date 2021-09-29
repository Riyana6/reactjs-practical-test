import React, { Component } from "react";
import Products from "../Products/Products";
import Filters from "../Products/Filters";
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <div className="split homeFilter">
                    <Filters />
                </div>
                <div className="split homeProducts">
                    <Products />
                </div>
            </div>
        );
    }
}

export default HomePage;
