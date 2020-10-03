import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './NavBarMain.css';
import { Link } from 'react-router-dom';
class NavBarMain extends Component {
    state = {}
    render() {
        return (
            <div id="bb">

                <div class="topnav">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                    <a class="navbar-brand iconmain" href="#">

                        <img src="https://cdn2.iconfinder.com/data/icons/simple-social-media-shadow/512/14-512.png"
                            width="70" height="70" alt="here" />
                    </a>
                    <input className="searchinput" type="search" placeholder="Search" aria-label="Search" />
                    <Link to="/referral">
                        <a href="#home" ><i class="fa fa-fw fa-link referralicon"><span class="referralText">Referral</span></i></a>
                    </Link>
                    <a href="#news"><i class="fa fa-fw fa-user usericon "><span class="referralText">Network</span></i></a>
                    <a href="#contact"><i class="fa fa-fw fa-bell bellicon"><span class="notificationText">Notifications</span></i></a>

                    <a href="#about" class="active"><i class="fa fa-fw fa-home apiicon"><span class="referralText">Home</span></i></a>
                    <a href="#news"><i class="fa fa-comments-o messageicon" aria-hidden="true"><span class="referralText">Messages</span></i></a>


                </div>

            </div>
        );
    }
}

export default NavBarMain;