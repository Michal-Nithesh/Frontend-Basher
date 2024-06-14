import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';
import gem from '../assets/img/gem.svg';
import axios from 'axios'; // Import axios for making API calls
import { fetchUserData } from '../api';
// import '../css/Navbar.css'; // Assuming you have some CSS for styling

const Navbar = () => {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.log('User fron nav:', user);
    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchUserData();
            setUser(userData);
            console.log('User data:', userData);
        };

        fetchData();
    }, []);

    const toggleDropdown = () => {
        console.log('Dropdown toggle clicked');
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="header dashboard @@headerClass">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                            <button className="navbar-toggler" type="button">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav menu">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#About">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#affiliate">Affiliates</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/leaderboard">Leaderboards</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#support">Support</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="dashboard_log my-2">
                                <div className="d-flex align-items-center">
                                    <div className="account_money">
                                        <ul>
                                            <li className="crypto"><span>{user ? user.points:'loading'}</span></li>
                                            <li className="usd"><img src={gem} alt="Gem" /></li>
                                        </ul>
                                    </div>
                                    <div className="profile_log dropdown">
                                        <div className="user" onClick={toggleDropdown}>
                                            <span className="thumb"><i className="la la-user"></i></span>
                                            <span className="name">{user ? user.username : 'Loading...'}</span>
                                            <span className="arrow"><i className="la la-angle-down"></i></span>
                                        </div>
                                        <div className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? 'show' : ''}`}>
                                            <Link className="dropdown-item" to="/profile">
                                                <i className="la la-user"></i>Profile
                                            </Link>
                                            <Link className="dropdown-item" to="#history">
                                                <i className="la la-book"></i>History
                                            </Link>
                                            <Link className="dropdown-item" to="#settings">
                                                <i className="la la-cog"></i>Settings
                                            </Link>
                                            <Link className="dropdown-item logout" to="#Logout">
                                                <i className="la la-sign-out"></i>Logout
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
