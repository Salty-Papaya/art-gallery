import React from 'react';
import './Card.css';

function Card({ title, link }) {
    return (
        <a href={link} className="card">
            {title}
        </a>
    );
}

export default Card;
