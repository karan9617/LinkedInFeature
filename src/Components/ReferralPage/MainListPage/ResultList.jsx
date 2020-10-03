import React, { Component } from 'react';

import DerviedList from "./DerivedList";

import '../ResultList.css';
class ResultList extends Component {
    state = {}
    render() {

        switch (this.props.visibilityOfList) {
            case 0:
                return (
                    <div>

                    </div>
                );
            case 1:
                return (
                    <div>
                        <div class="col-md-6 leftlist">
                            {this.props.names.map(name =>
                                <ul>
                                    <li>
                                        <DerviedList
                                            key={name.key}
                                            name={name}
                                            handleRequestButton={this.handleRequestButton}
                                        />
                                        <hr />
                                    </li>
                                </ul>
                            )}

                        </div>
                        <div class="col-md-6 leftlist">



                        </div>
                    </div>
                );

        }

    }

    handleRequestButton = (nameObj) => {
        console.log(nameObj);
    }
}

export default ResultList;