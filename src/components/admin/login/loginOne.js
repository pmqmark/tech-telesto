import React, { useContext, useEffect, useState } from 'react'
import './loginOne.css'
import imageOne from './Picsart_22-06-19_23-04-22-074-01 (1) 1.png'
import imageTwo from './unsplash_NsrkkaxBIQA.jpg'
import { Link } from 'react-router-dom'
import instance from '../../../utils/axiosInstance';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../../context/AuthProvider'


function LoginOne() {
    const { setAuth, auth } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await instance.post('/admin/login', {
                email: email,
                password: password,
            });

            setAuth(response.data)
            // Check the response from the backend
            if (response.status === 200) {
                // onAuthentication(true);

                navigate('/admin/dashboard');

            } else {
                // Internal server error
                alert('Internal server error. Please try again later.');
                navigate('/admin/login')
            }
        } catch (error) {
            alert('Please make sure the password and mailID are correct')
            console.log(error)
        }
    };

    

    return (

        <div className='LoginMain'>
            <div className='ContainerLogin'>
                <div className='LeftImageSection' >
                    <img className='imageOnelogin' src={imageOne} alt="" />
                    <img className='imageTwologin' src={imageTwo} alt="" />
                </div>
                <div className='verticalLine'></div>
                <div className='sectionright'>
                    <div className='textAreaTop'>
                        <h1>WELCOME</h1>
                        <p>Sign In</p>
                    </div>
                    <div className='input-area-login' >
                        <form onSubmit={handleLoginSubmit} >
                            <input className='textInputOne' type="text" value={email}
                                onChange={(e) => setEmail(e.target.value)} placeholder='Email id/Username' required />
                            <br />
                            <input className='textInputpass' type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder='Password' required />
                            <br />
                            <Link className='resetPass' ><p>Forgot Password?</p></Link>
                            <br />
                            <button type="submit"  >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginOne