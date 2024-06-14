import '../css/Leaderboard.css';

const HistoryPage = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>CoinGain - Earn Free CS:GO Skins, Cryptocurrencies & Gift Cards</title>
        <meta name="description" content="Earn Gems by Watching Videos, Playing Games & Completing Paid Surveys. Exchange them into Free Skins, Gift Cards, Cryptocurrencies, PayPal Money, CS:GO Items, Steam Items, and Various other Rewards. Join us Today & Never pay for Skins again!" />
        <meta name="keywords" content="earn free money, free csgo skins, free steam items, free steam skins, steam, csgo, free csgo skins, free, earn, skins,free game keys, earn game keys, free steam games, earn steam games, free steam keys, free steam games, gaming rewards, free gaming rewards, CoinGain, earn, sanity, earn sanity, earn santy, sanity earn, coingain" />
        <link rel="icon" type="image/png" sizes="16x16" href="./images/favicon.png" />
        <link rel="stylesheet" href="./vendor/owlcarousel/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="./vendor/owlcarousel/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="./vendor/animation/sal.css" />
        <link rel="stylesheet" href="./vendor/waves/waves.min.css" />
        <link rel="stylesheet" href="./vendor/toastr/toastr.min.css" />
        <link rel="stylesheet" href="./css/style.css" />
      </head>

      <body className="dashboard">
        <div id="preloader"><i>.</i><i>.</i><i>.</i></div>

        <div id="main-wrapper">
          <div className="header dashboard">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="index.html">
                      <img src="./images/logo.png" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav menu">
                        <li className="nav-item">
                          <a className="nav-link" href="shop.html">Shop</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="affiliate.html">Affiliates</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="leaderboard.html">Leaderboards</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="support.html">Support</a>
                        </li>
                      </ul>
                    </div>
                    <div className="dashboard_log my-2">
                      <div className="d-flex align-items-center">
                        <div className="account_money">
                          <ul>
                            <li className="crypto">
                              <span>2500</span>
                              <img src="./images/icon/gem.svg" alt="" />
                            </li>
                            <li className="usd">
                              <span>4000 USD</span>
                            </li>
                          </ul>
                        </div>
                        <div className="profile_log dropdown">
                          <div className="user" data-bs-toggle="dropdown">
                            <span className="thumb"><i className="la la-user"></i></span>
                            <span className="name">Thomas Christ</span>
                            <span className="arrow"><i className="la la-angle-down"></i></span>
                          </div>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="profile.html" className="dropdown-item">
                              <i className="la la-user"></i>
                              Profile
                            </a>
                            <a href="history.html" className="dropdown-item">
                              <i className="la la-book"></i>
                              History
                            </a>
                            <a href="setting.html" className="dropdown-item">
                              <i className="la la-cog"></i>
                              Setting
                            </a>
                            <a href="index.html" className="dropdown-item logout">
                              <i className="la la-sign-out"></i>
                              Logout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="page_title section-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="page_title-content">
                    <p>Back to Home</p>
                    <h3>Earning History</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="history">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="history_header">
                    <div className="select_search">
                      <div className="select_box">
                        <div className="drop-menu form-control">
                          <div className="select">
                            <span>Any Type</span>
                            <i className="fa fa-angle-right"></i>
                          </div>
                          <input type="hidden" name="gender" />
                          <ul className="dropeddown">
                            <li>Earnings</li>
                            <li>Withdrawals</li>
                            <li>Reversals</li>
                          </ul>
                        </div>
                      </div>
                      <div className="search">
                        <form action="#">
                          <input type="text" className="form-control" placeholder="Search history" />
                          <span><i className="fa fa-search"></i></span>
                        </form>
                      </div>
                    </div>
                    <div className="duration-option">
                      <a className="active" href="#">All time</a>
                      <a href="#">24 H</a>
                      <a href="#">7D</a>
                      <a href="#">14D</a>
                      <a href="#">30D</a>
                    </div>
                  </div>

                  <div className="history_table">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Type</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gems</th>
                            <th scope="col">Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>124412112414</td>
                            <td>Offer Toro</td>
                            <td>John Pemad</td>
                            <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                            <td>02 : 24 am</td>
                          </tr>
                          <tr>
                            <td>124412112414</td>
                            <td>Offer Toro</td>
                            <td>John Pemad</td>
                            <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                            <td>02 : 24 am</td>
                          </tr>
                          <tr>
                            <td>124412112414</td>
                            <td>Offer Toro</td>
                            <td>John Pemad</td>
                            <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                            <td>02 : 24 am</td>
                          </tr>
                          <tr>
                            <td>124412112414</td>
                            <td>Offer Toro</td>
                            <td>John Pemad</td>
                            <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                            <td>02 : 24 am</td>
                          </tr>
                          <tr>
                            <td>124412112414</td>
                            <td>Offer Toro</td>
                            <td>John Pemad</td>
                            <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                            <td>02 : 24 am</td>
                          </tr>
                          <tr>
                            <td>124412112414</td>
                            <td>Offer Toro</td>
                            <td>John Pemad</td>
                            <td>13.200 <span><img src="./images/svg/gem.svg" alt="" /></span></td>
                            <td>02 : 24 am</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <nav className="history_pagination">
                    <ul className="pagination justify-content-end">
                      <li className="page-item disabled">
                        <a className="page-link" href="#">
                          <span><i className="fa fa-angle-left"></i></span>
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link active" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <span><i className="fa fa-angle-right"></i></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="footer dashboard">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="footer-link text-left">
                    <a href="#" className="m_logo">
                      <img src="./images/m_logo.png" alt="" />
                    </a>
                    <a href="shop.html">Shop</a>
                    <a href="affiliate.html">Affiliates</a>
                    <a href="affiliate.html">Leaderboards</a>
                    <a href="support.html">Support</a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="footer-link text-end">
                    <a href="about.html">About</a>
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="term-condition.html">Term & Service</a>
                    <a href="bug-bunty.html">Bug Bounty</a>
                  </div>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="copy_right text-center text-lg-start">
                    Copyright ©
                    <script>
                      var CurrentYear = new Date().getFullYear();
                      document.write(CurrentYear);
                    </script>
                    CoinGain. All Rights Reserved.
                  </div>
                </div>
                <div className="col-xl-6 text-center text-lg-end py-5 py-lg-0">
                  <div className="social">
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="./vendor/jquery/jquery.min.js"></script>
        <script src="./vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="./vendor/apexchart/apexcharts.min.js"></script>
        <script src="./js/plugins/apex-price.js"></script>
        <script src="./vendor/slick/slick.min.js"></script>
        <script src="./js/plugins/slick-init.js"></script>
        <script src="./js/scripts.js"></script>
      </body>
    </>
  );
};

export default HistoryPage;
