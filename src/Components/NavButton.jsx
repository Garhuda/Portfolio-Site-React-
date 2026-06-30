import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Components.css';
const NavButton = ({ controller, caption}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const path = `${controller}`;
        navigate(path);
    };

    return (
        <div className="NavButton" onClick={handleClick}>
            <div>{caption}</div>
        </div>
    );
};

export default NavButton;