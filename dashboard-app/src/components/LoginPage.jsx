import React from 'react';
import bash from '../assets/img/bashers.png';
import google from '../assets/img/google-icon.png';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import '../css/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/leaderboard');
  };

  const matchPassword = () => {
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

  const contactAlert = () => {
    alert("As a guest you can't access this page, please sign in or sign up to access this page");
  };

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/auth/google/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: tokenResponse.credential, // This is the token received from Google
          }),
        });

        const data = await res.json();
        if (res.ok) {
          // Assuming the backend sends a JWT token on successful login
          localStorage.setItem('token', data.token);
          navigate('/leaderboard'); // Navigate to a protected route
        } else {
          console.error('Login failed:', data.message);
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
      
      <div className="login_container" id="container" >
        <div className="form-container sign-up-container">
          <form action="#" onSubmit={handleSubmit}>
            <h1 id='login'>Create Account</h1>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Age" />
            <input type="password" placeholder="Password" id="pswd1" />
            <input type="password" placeholder="Confirm password" id="pswd2" />
            <button type="button" onClick={matchPassword}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container" id='login'>
          <form action="#">
            <div>
              <img src={bash} alt="Bashers logo" width="60px" height="60px" />
            </div>
            <h1 id='login'>Sign in</h1>
            <span>or use your account</span>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <div className="flex flex-col items-center mt-7 text-gray-500">
              <div className="flex items-center w-full mb-5">
                <hr className="flex-grow border-gray-500" />
                <span className="mx-3 text-sm">OR</span>
                <hr className="flex-grow border-gray-500" />
              </div>
            </div>
            <button className='Gog' onClick={login}>
              <img src={google} alt="Google icon" width="20px" height="20px" />
              Login with Google
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" id="signIn" onClick={handleSignIn}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Bashers!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" id="signUp" onClick={contactAlert}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
