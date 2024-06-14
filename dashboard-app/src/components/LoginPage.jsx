//loginpage.jsx
import React from 'react';
import bash from '../assets/img/bashers.png';
import google from '../assets/img/google-icon.png';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import '../css/LoginPage.css';
import axios from 'axios';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/leaderboard'); // Replace with your intended route
  };

  const matchPassword = () => {
    // Handle password logic (can be removed if not needed)
    const pw1 = document.getElementById('pswd1').value;
    const pw2 = document.getElementById('pswd2').value;
    if (pw1 !== pw2) {
      alert('Passwords did not match');
    } else {
      alert('Password created successfully');
    }
  };

  const handleSignIn = () => {
    document.getElementById('container').classList.remove('right-panel-active');
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Login successful:', tokenResponse);
      const { access_token } = tokenResponse;
      console.log(access_token);
      try {
        const res = await axios.post('https://9g7phc4b-8000.inc1.devtunnels.ms/api/auth/social/google/', {
          access_token,
          
        });

        if (res.status === 200) {
          const data = res.data;
          console.log('Login successful:', data);
          // Assuming the Django backend sends a JWT token on successful login
          localStorage.setItem('token', data.key);
          navigate('/leaderboard'); // Navigate to a protected route
        } else {
          console.error('Login failed:', res.data.message);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div id="login-page">
      {/* Your HTML structure */}
      <button className='Gog' onClick={login}>
        <img src={google} alt="Google icon" width="20px" height="20px" />
        Login with Google
      </button>
    </div>
  );
}

export default LoginPage;
