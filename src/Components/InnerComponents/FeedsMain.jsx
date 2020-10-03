import React, { Component } from 'react';
import './FeedsMain.css';


class FeedsMain extends Component {
    state = {}
    render() {
        return (

            <div class="outer">

                <div class="outerclass">
                    <div class="row">
                        <div class="col-sm-3 inner1">
                            <img src="https://www.kindpng.com/picc/m/442-4426528_round-picture-profile-blond-hd-png-download.png"
                                width="76px" height="76px" class="profilepic" />
                            <h5>Sally James</h5>
                            <p>Software Developer</p>
                            <hr />

                        </div>
                        <div class="col-sm-5 inner"><br />
                            <p>Jobs Recommended for you</p>
                            <hr />
                            <ul class="companiesList">
                                <li>
                                    <div>
                                        <img src="https://lh3.googleusercontent.com/Gn63lcwuTLoKg9QSoMha6xxqdUM33R6u3zKmgYbG6j9POfkKBLfkjoBuRXzZjtD1wUg"
                                            width="40px" height="40px" />
                                        <span class="companyName">JP Morgan
                                        </span>
                                        <p class="openingInfo">Software Engineer, San Francisco, US</p>
                                    </div>
                                </li>
                                <hr />
                                <li>
                                    <div>
                                        <img src="https://cdn.iconscout.com/icon/free/png-512/tesla-11-569489.png"
                                            width="40px" height="40px" />
                                        <span class="companyName">Tesla</span>
                                        <p class="openingInfo">Software Engineer, San Francisco, US</p>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div class="col-sm-3 inner3">
                            <h5 class="newhead">Today's News and Views</h5>

                            <ul>
                                <li><span>The shopping cart is changing</span>
                                    <p>3d ago. 478 readers</p>
                                </li>
                                <li>
                                    <span>The shopping cart is changing</span>
                                    <p>3d ago. 478 readers</p>
                                </li>
                                <li><span>The shopping cart is changing</span>
                                    <p>3d ago. 478 readers</p></li>
                                <li><span>The shopping cart is changing</span>
                                    <p>3d ago. 478 readers</p></li>
                                <li><span>The shopping cart is changing</span>
                                    <p>3d ago. 478 readers</p></li>
                            </ul>
                            <button class="showmore">Show more
                            <i class="fa fa-chevron-down" aria-hidden="true"></i></button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default FeedsMain;