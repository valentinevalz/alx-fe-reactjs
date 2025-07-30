// src/WelcomeMessage.jsx
import React from 'react';

function WelcomeMessage() {
    return (
        <div style={{ padding: '20px', border: '1px solid #61dafb', borderRadius: '8px', margin: '20px 0', backgroundColor: '#e0f7fa' }}>
            <h1 style={{ color: '#007bff' }}>Hello everyone, I am learning React at ALX!</h1>
            <p style={{ fontSize: '1.1em', color: '#555' }}>This is a simple JSX component.</p>
            <p style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#333' }}>I am learning about JSX!</p>
        </div>
    );
}

export default WelcomeMessage;