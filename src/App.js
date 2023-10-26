import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
    return (
        <div className="card-container">
            <Card title="Art Style 1" link="#style1" />
            <Card title="Art Style 2" link="#style2" />
            <Card title="Art Style 3" link="#style3" />
            <Card title="Art Style 4" link="#style4" />
            <Card title="Art Style 5" link="#style5" />
        </div>
    );
}

export default App;
