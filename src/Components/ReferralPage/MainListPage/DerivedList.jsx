import React, { Component } from 'react';
import './DerivedList.css';

class DerivedList extends Component {
    state = {}
    render() {
        return (
            <div class="row listblock">
                <div class="col-md-6">
                    <img src={this.props.name2.img} width="52" height="52" class="profilepicture" />
                    <span class="recruiterName">{this.props.name2.name}</span>

                    <p class="recruiterCompany">{this.props.name2.company}</p>
                    <p class="locationName"><img src="https://p7.hiclipart.com/preview/517/350/522/paper-google-map-maker-computer-icons-world-map-location-icon.jpg"

                        width="14" height="14" />

                        {this.props.name2.location}
                    </p>

                    <button class="requestbutton" onClick={() => this.props.handleRequestButton(this.props.name2)}><span class="requestText">Request</span></button>
                </div>
            </div>
        );
    }

}

export default DerivedList;