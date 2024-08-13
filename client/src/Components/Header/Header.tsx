import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "../../pages/Main/Main";
const Header = () =>{
    return(
        <div className="Header">
            <Link to="/"><img className="Logo" src="/logo.png" alt="LOGOTYPE" /></Link>
            <div className="NavBar">
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header