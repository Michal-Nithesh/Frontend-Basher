import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        fetch('https://improved-enigma-6jj6x655796c47xg-8000.app.github.dev/api/leaderboard/')
            .then(response => response.json())
            .then(data => setLeaderboard(data))
            .catch(error => console.error('There was an error!', error));
    }, []);

    const randomUserNumber = Math.floor(Math.random() * 7) + 1;

    return (
        <>
            <div id="__next">
                <div id="main-wrapper">
                    <header className="header dashboard @@headerClass">
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
                                                <li className="nav-item"><Link className="nav-link" to="#About">About</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#affiliate">Affiliates</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#leaderboard">Leaderboards</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="#support">Support</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dashboard_log my-2">
                                            <div className="d-flex align-items-center">
                                                <div className="account_money">
                                                    <ul>
                                                        <li className="crypto"><span>2500</span><img src={gem} alt="Gem" /></li>
                                                        <li className="usd"><span>4000 USD</span></li>
                                                    </ul>
                                                </div>
                                                <div className="profile_log dropdown">
                                                    <div className="user">
                                                        <span className="thumb"><i className="la la-user"></i></span>
                                                        <span className="name">Thomas Christ</span>
                                                        <span className="arrow"><i className="la la-angle-down"></i></span>
                                                    </div>
                                                    <div className="dropdown-menu dropdown-menu-end" style={{ right: 0, left: 'auto' }}>
                                                        <Link className="dropdown-item" to="#profile"><i className="la la-user"></i>Profile</Link>
                                                        <Link className="dropdown-item" to="#history"><i className="la la-book"></i>History</Link>
                                                        <Link className="dropdown-item" to="#settings"><i className="la la-cog"></i>Settings</Link>
                                                        <Link className="dropdown-item logout" to="#Logout"><i className="la la-sign-out"></i>Logout</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="page_title section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="page_title-content">
                                        <p>Leaderboard</p>
                                        <h3>Basher&apos;s Top Ranking</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ani-3"><img src={Bcircle} alt="Brown Circle" /></div>
                        <div className="ani-4"><img src={line} alt="Line" /></div>
                        <div className="ani-6"><img src={circle2} alt="Circle 2" /></div>
                        <div className="ani-7"><img src={circleline} alt="Circle Line" /></div>
                        <div className="ani-8"><img src={polygon} alt="Polygon" /></div>
                    </div>
                </div>
                <div className="leaderboard">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="leaderboard_top_rank">
                                    <div className="ani-17"><img src={ani17} alt="Animation 17" /></div>
                                    <div className="ani-18"><img src={ani18} alt="Animation 18" /></div>
                                    <div className="top_rank">
                                        {leaderboard.slice(0, 3).map((user, index) => (
                                            <div className={`d-flex ${index === 0 ? 'crown rank_ani1' : index === 1 ? 'cup rank_ani2' : 'medal rank_ani1'}`} key={user.id}>
                                                <div className="rank_icon"><img src={index === 0 ? crownIcon : index === 1 ? cupIcon : medalIcon} alt={index === 0 ? 'Crown' : index === 1 ? 'Cup' : 'Medal'} /></div>
                                                <div className="flex-grow-1"><span className="circle"></span>
                                                    <h6>{index === 0 ? 'First 1' : index === 1 ? 'Second 2' : 'Third 3'}</h6>
                                                    <h5>{user.username}</h5>
                                                    <p>{user.rank}</p>
                                                </div>
                                                <div className="prize">
                                                    <h4>{user.points}</h4>
                                                    <div className="prize_gem"><span>Prize</span><img src={gemIcon} alt="Gem" /></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="leaderboard_content">
                                    <div className="leaderboard_tab">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="alltime">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Place</th>
                                                                <th scope="col">User</th>
                                                                <th scope="col">Credit <img src={gemIcon} alt="Gem" /></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id='rolling'>
                                                            {leaderboard.slice(3).map((user, index) => (
                                                                <tr key={user.id}>
                                                                    <th scope="row">{index + 4}</th>
                                                                    <td className="user_circle"><span className={`circle user${randomUserNumber}`}></span>{user.username}</td>
                                                                    <td>{user.points} <img src={gemIcon} alt="Gem" /></td>
                                                                </tr>
                                                            ))}
                                                            {/* Additional static rows */}
                                                            <tr>
                                                                <th scope="row">06</th>
                                                                <td className="user_circle"><span className="circle user3"></span>Magda Hera</td>
                                                                <td>13.200 <img src={gemIcon} alt="Gem" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">07</th>
                                                                <td className="user_circle"><span className="circle user4"></span>Danielad Dan</td>
                                                                <td>13.200 <img src={gemIcon} alt="Gem" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">08</th>
                                                                <td className="user_circle"><span className="circle user5"></span>Henry</td>
                                                                <td>13.200 <img src={gemIcon} alt="Gem" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">09</th>
                                                                <td className="user_circle"><span className="circle user6"></span>Thomas C</td>
                                                                <td>13.200 <img src={gemIcon} alt="Gem" /></td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">10</th>
                                                                <td className="user_circle"><span className="circle user7"></span>Paijoo</td>
                                                                <td>13.200 <img src={gemIcon} alt="Gem" /></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="load_more"><button onClick={() => alert('Loading more...')}>Load More</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer dashboard">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="footer-link text-left">
                                    <Link className="m_logo" to="#leaderboard"><img src={mLogo} alt="Logo" /></Link>
                                    <Link to="#">Shop</Link>
                                    <Link to="#affiliate">Affiliates</Link>
                                    <Link to="#leaderboard">Leaderboards</Link>
                                    <Link to="#support">Support</Link>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="footer-link text-end">
                                    <Link to="#about">About</Link>
                                    <Link to="#privacy-policy">Privacy Policy</Link>
                                    <Link to="#term-condition">Terms & Service</Link>
                                    <Link to="#bug-bounty">Bug Bounty</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-xl-6">
                                <div className="copy_right text-center text-lg-start">
                                    Copyright © Bashers All Rights Reserved.
                                </div>
                            </div>
                            {/* Uncomment and update links for social media icons */}
                            {/* <div className="col-xl-6 text-center text-lg-end py-5 py-lg-0">
                                <div className="social">
                                    <Link to="#leaderboard"><i className="fab fa-youtube"></i></Link>
                                    <Link to="#leaderboard"><i className="fab fa-instagram"></i></Link>
                                    <Link to="#leaderboard"><i className="fab fa-twitter"></i></Link>
                                    <Link to="#leaderboard"><i className="fab fa-facebook"></i></Link>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Leaderboard;
