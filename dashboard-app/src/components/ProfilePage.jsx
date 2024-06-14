import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import crownIcon from '../assets/img/crown.svg';
import cupIcon from '../assets/img/cup.svg';
import medalIcon from '../assets/img/medal.svg';
import gemIcon from '../assets/img/gem_002.svg';
import gem from '../assets/img/gem.svg';
import ani17 from '../assets/img/ani-17.png';
import ani18 from '../assets/img/ani-18.png';
import mLogo from '../assets/img/m_logo.png';
import polygon from '../assets/img/polygon.svg';
import circle2 from '../assets/img/circle2.svg';
import circleline from '../assets/img/circleline.svg';
import line from '../assets/img/line.svg';
import Bcircle from '../assets/img/brown_circle.svg';
import logo from '../assets/img/logo.png';
import '../css/Leaderboard.css';
import PointsChart from './PointsChart';

const ProfilePage = () => {
    const [profile, setProfile] = useState({});
    const [duration, setDuration] = useState('all'); // State for selected duration
    const token = localStorage.getItem('token');
    const durationDisplayNames = {
        'all': 'All Time',
        '7d': '7 Days',
        '14d': '14 Days',
        '30d': '30 Days',
    };
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/user/profile/', {
            headers: {
                'Authorization': `Token ${token}`,
            },
        })
        .then(response => setProfile(response.data))
        .catch(error => console.error('Error:', error));
    }, [token]);

    const handleDurationChange = (newDuration) => {
        setDuration(newDuration);
    };

    return (
        <div id="__next">
            <div id="main-wrapper">
                <div className="page_title section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="page_title-content">
                                    <p>Back to Home</p>
                                    <h3>Profile</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ani-3"><img src={Bcircle} alt="" /></div>
                    <div className="ani-4"><img src={line} alt=""/></div>
                    <div className="ani-6"><img src={circle2} alt=""/></div>
                    <div className="ani-7"><img src={circleline} alt=""/></div>
                    <div className="ani-8"><img src={polygon} alt=""/></div>
                </div>
                <div className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="profile_card">
                                 <div className="d-flex">
                                    {profile.avatar ? (
                                        <img src={profile.avatar} alt="Profile" />
                                    ) : (
                                        <span className="thumb"><i className="la la-user"></i></span>
                                    )}
                                    <div className="flex-grow-1">
                                        <h4>{profile.username}</h4>
                                        <p>{profile.email}</p>
                                    </div>
                                    </div>
                                    <div className="profile-reg">
                                        <div className="registered">
                                            <h5>{profile.registration_date}</h5>
                                            <p>Registered</p>
                                        </div>
                                        <span className="reg_divider"></span>
                                        <div className="rank">
                                            <h5>{profile.rank}</h5>
                                            <p>Rank</p>
                                        </div>
                                    </div>
                                    <div className="profile_list">
                                        <ul className="nav nav-tabs">
                                            <li>
                                                <Link to="/profile#coinEarn" className="active">
                                                    <span className="icons usd">
                                                        <i className="fa fa-usd"></i>
                                                    </span>
                                                    Coin Earned
                                                    <span><i className="la la-angle-right"></i></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/profile#offeres">
                                                    <span className="icons gift">
                                                        <i className="fas fa-gift"></i>
                                                    </span>
                                                    Offers Completed
                                                    <span><i className="la la-angle-right"></i></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/profile#order">
                                                    <span className="icons cart">
                                                        <i className="fa fa-cart-plus"></i>
                                                    </span>
                                                    Order Placed
                                                    <span><i className="la la-angle-right"></i></span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/profile#referrals">
                                                    <span className="icons link">
                                                        <i className="fa fa-link"></i>
                                                    </span>
                                                    Referrals
                                                    <span><i className="la la-angle-right"></i></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="coinEarn">
                                        <div className="profile_chart">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">
                                                        <span className="icons usd">
                                                            <i className="fa fa-usd"></i>
                                                        </span>
                                                        Coin Earned
                                                        <span className="active current-duration">{durationDisplayNames[duration]}</span>
                                                    </h4>
                                                    <div className="duration-option">
                                                        <Link className={duration === 'all' ? 'active' : ''} onClick={() => handleDurationChange('all')} to="#">All time</Link>
                                                        <Link className={duration === '7d' ? 'active' : ''} onClick={() => handleDurationChange('7d')} to="#">7D</Link>
                                                        <Link className={duration === '14d' ? 'active' : ''} onClick={() => handleDurationChange('14d')} to="#">14D</Link>
                                                        <Link className={duration === '30d' ? 'active' : ''} onClick={() => handleDurationChange('30d')} to="#">30D</Link>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="chart_current_data">
                                                        <h3>{profile.points}</h3>
                                                        <p>Points Earned</p>
                                                    </div>
                                                    <PointsChart duration={duration} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="offeres">
                                        <div className="profile_chart">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">
                                                        <span className="icons gift">
                                                            <i className="fas fa-gift"></i>
                                                        </span>
                                                        Offers Completed
                                                        <span className="active">All Time</span>
                                                    </h4>
                                                    <div className="duration-option">
                                                        <Link to="/profile#">All time</Link>
                                                        <Link className="active" to="/profile#">24 H</Link>
                                                        <Link to="/profile#">7D</Link>
                                                        <Link to="/profile#">14D</Link>
                                                        <Link to="/profile#">30D</Link>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="chart_current_data">
                                                        <h3>406</h3>
                                                        <p>Offer Completed</p>
                                                    </div>
                                                    <canvas id="offer_completed"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="order">
                                        <div className="profile_chart">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">
                                                        <span className="icons link">
                                                            <i className="fa fa-link"></i>
                                                        </span>
                                                        Referrals Link
                                                        <span className="active">All Time</span>
                                                    </h4>
                                                    <div className="duration-option">
                                                        <Link to="/profile#">All time</Link>
                                                        <Link to="/profile#">24 H</Link>
                                                        <Link to="/profile#">7D</Link>
                                                        <Link className="active" to="/profile#">14D</Link>
                                                        <Link to="/profile#">30D</Link>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="chart_current_data">
                                                        <h3>406</h3>
                                                        <p>Referrals Link</p>
                                                    </div>
                                                    <canvas id="refferal_link"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="referrals">
                                        <div className="profile_chart">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4 className="card-title">
                                                        <span className="icons cart">
                                                            <i className="fa fa-cart-plus"></i>
                                                        </span>
                                                        Order Placed
                                                        <span className="active">All Time</span>
                                                    </h4>
                                                    <div className="duration-option">
                                                        <Link to="/profile#">All time</Link>
                                                        <Link to="/profile#">24 H</Link>
                                                        <Link className="active" to="/profile#">7D</Link>
                                                        <Link to="/profile#">14D</Link>
                                                        <Link to="/profile#">30D</Link>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="chart_current_data">
                                                        <h3>406</h3>
                                                        <p>Order Placed</p>
                                                    </div>
                                                    <canvas id="order_placed"></canvas>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
