import React from "react";
import Logo from "./Logo";

function Header() {
    return (
        // Hat
        <container className="hat">
            <container className="nav-elements">
            <div className="banner" >
                <Logo/>
                <div className="banner-text">
                    <div className="company-name">WeatherNews</div>
                    <div className="company-description">Something New</div>
                </div>
            </div>
            <container className="nav-bar">
                <div className="home menu-item" >Home</div>
                <div className="menu-item" >News</div>
                <div className="menu-item" >Live cameras</div>
                <div className="menu-item" >Photos</div>
                <div className="menu-item" >Contact</div>
                </container>
            </container>    
        </container>
    )
}

export default Header