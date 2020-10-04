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
                            {
                                this.props.names.filter(name =>
                                    name.company.includes(this.props.inputVariable)).map(name2 => (
                                        <ul>
                                            <li>
                                                <DerviedList
                                                    key={name2.key}
                                                    name2={name2}
                                                    handleRequestButton={this.handleRequestButton}
                                                />
                                                <hr />
                                            </li>
                                        </ul>
                                    ))

                            }

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