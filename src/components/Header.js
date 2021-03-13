import React from "react";

const NavigationBar = () => {
    return (
        <> 
            <div className="navbar-container">
                <div className="logo-container">
                    <h1>Niki Q</h1>
                </div>

                <div className="buttons-container">
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Contact Me</li>
                        <li>Photo Gallery</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavigationBar;