import React, { Component } from 'react';

import NavBarMain from '../InnerComponents/NavBarMain';
import SearchBar from './SearchBar';
import "./ReferralClass.css";

import ResultList from "./MainListPage/ResultList";

class ReferralClass extends Component {
    state = {

        visibilityOfList: 1,
        requestButtonFlag: 1,

        names: [
            { id: 0, name: "Mark Manson", company: "Google", location: "San Francisco,US", img: "https://bioprotect.com/wp-content/uploads/2017/10/maya-profile-round.jpg" },
            { id: 0, name: "James Adam", company: "Google", location: "Seattle,US", img: "https://cdn.iconscout.com/icon/free/png-256/microsoft-26-722716.png" },
            { id: 0, name: "Ross Geller", company: "Google", location: "San Francisco,US", img: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png" },
            { id: 0, name: "Anjali Desai", company: "Google", location: "San Francisco,US", img: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png" },
            { id: 0, name: "Anna Bell", company: "Google", location: "San Francisco,US", img: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png" },
            { id: 0, name: "Mark Manson", company: "Google", location: "San Francisco,US", img: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png" },
            { id: 0, name: "Mark Manson", company: "Google", location: "San Francisco,US", img: "https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/microsoft-512.png" },
        ]

    }
    render() {
        return (

            <div class="outerBoxBox">
                <NavBarMain />
                <div class="container divClass">

                    <SearchBar
                        visibilityOfList={this.state.visibilityOfList}

                    />

                    <ResultList
                        visibilityOfList={this.state.visibilityOfList}
                        names={this.state.names}

                    />
                </div>
            </div>

        );
    }
    visibilityOfList = (number) => {

        this.visibilityOfList = number;

    }

}

export default ReferralClass;