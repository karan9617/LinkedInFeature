import React, { Component } from 'react';
import './Forms.css';
import { BrowserRouter as Router } from 'react-router';
import { Link } from 'react-router-dom';

class Forms extends Component {
    state = {
        heading: 'Welcome back'
    }


    render() {
        return (
            <div className="container" id="cover">
                <h2 className="text-center font-weight-bold head" >LinkedIn</h2>
                <br />
                <h3 className="text-center font-weight-bold">{this.state.heading}</h3>
                <h4 className="text-center heading4">Don't miss your next opportunity. Sign in to stay updated on your professional world.</h4>
                <form className="forms form-inline-block justify-content-center">
                    <div class="form-group">

                        <input type="email" class="form-control username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div class="form-group">

                        <input type="password" class="form-control passwordfield" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div className="col text-center">
                        <Link to="/login">
                            <button type="submit" class="btn btn-primary signin">Sign In</button>
                        </Link>
                    </div>
                </form>
            </div>

        );
    }
    stylesOfHeading = () => {

    }
}

export default Forms;