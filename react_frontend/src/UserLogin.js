import React, { useState } from 'react';
import { login } from './AuthenticationService';

const UserLoginService = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const data = await login({username, password});
            setMessage("Logged in successfully!");
            // Navigate to user home page or dashboard once user login functionality is completed
        } catch (error) {
            console.error(error);
            setMessage("Login failed!");
        }
    }

    return (
        <div>
            <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>{message}</p>
        </div>
    );
}

export default UserLoginService;
