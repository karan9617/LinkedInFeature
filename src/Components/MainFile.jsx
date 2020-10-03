import React, { Component } from 'react';
import NavBarMain from './InnerComponents/NavBarMain';
import FeedsMain from './InnerComponents/FeedsMain';
class MainFile extends Component {
    state = {}
    render() {
        return (
            <div>
                <NavBarMain />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                <FeedsMain />
            </div>
        );
    }
}

export default MainFile;