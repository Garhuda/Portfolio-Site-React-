import React from 'react';
import Footer from './Footer';
import NavButton from './NavButton';
import './Components.css';
import { Outlet } from 'react-router-dom';
function Layout({ children }) {
    return (
        <div className="layout-container">
            <nav align="center" className="navbar scroll-reveal">           
                    <NavButton className="NavButton" controller="/" caption="Home" />
                    <NavButton className="NavButton" controller="/Projects" caption="Projects" />
                    <NavButton className="NavButton" controller="/Courses" caption="Courses" />
                    <NavButton className="NavButton" controller="/Resume" caption="Resume" />
                    
            </nav>
            <div className="layout-content">
                <Outlet /> 
            </div>
           
            <hr className="divider"/>
            
            <Footer className="footer"/>
            

        </div>
    );
};

export default Layout;
