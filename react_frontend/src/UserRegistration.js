import React, { useState } from 'react';
import { register } from './AuthenticationService';

const UserRegisterationService = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        try {
            const data = await register({username, email, password1, password2});
            setMessage("Registered successfully! You can now log in.");
            // Navigate to login page here??
        } catch (error) {
            console.error(error);
            setMessage("Registration failed!");
        }
    }

    return (
        <div>
            <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={e => setPassword1(e.target.value)} placeholder="Password" />
            <input type="password" onChange={e => setPassword2(e.target.value)} placeholder="Confirm Password" />
            <button onClick={handleRegister}>Register</button>
            <p>{message}</p>
        </div>
    );
}

export default UserRegisterationService;
