import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Components.css';
const ImageButton = ({ imagePath, caption, controller, className }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const path = `/${controller}`;
        navigate(path);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleClick();
        }
    };

    return (
        <div
            className={`ImageButton scroll-reveal ${className || ''}`.trim()}
            role="button"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <img src={imagePath} alt={caption} className="ImageButton-image" />
            <div className="ImageButton-caption">{caption}</div>
        </div>
    );
};

export default ImageButton;

