import React from 'react';
import bash from '../assets/img/bashers.png';
import google from '../assets/img/google-icon.png';
import { useNavigate } from 'react-router-dom';
import '../css/LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/Leaderboard');
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

  return (
    <div className="container" id="container">
      <div className="form-container sign-up-container">
        <form action="#" onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Age" />
          <input type="password" placeholder="Password" id="pswd1" />
          <input type="password" placeholder="Confirm password" id="pswd2" />
          <button type="button" onClick={matchPassword}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <div>
            <img src={bash} alt="Bashers logo" width="60px" height="60px" />
          </div>
          <h1>Sign in</h1>
          <span>or use your account</span>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          {/* Uncomment the following lines if needed */}
          {/* <a href="#">Forgot your password?</a> */}
          {/* <form onSubmit={handleSubmit}>
            <button type="submit">Log in</button>
          </form> */}
          <div className="flex flex-col items-center mt-7 text-gray-500">
            <div className="flex items-center w-full mb-5">
              <hr className="flex-grow border-gray-500" />
              <span className="mx-3 text-sm">OR</span>
              <hr className="flex-grow border-gray-500" />
            </div>
          </div>
          <button className='Gog'>
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
  );
}

export default LoginPage;
