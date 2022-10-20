import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, confirmPassword] = useState('');
    const [error, setError] = useState('');
    return (
        <div className='from-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;