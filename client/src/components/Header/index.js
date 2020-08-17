import React from "react";
import style from "./style.css";

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid text-center text-primary">
            <div className="container boxed">
                <h1>React Google Books Search</h1>
                <h3>Search and Save Books of Interest</h3>
            </div>
        </div>
    );
}

export default Header;