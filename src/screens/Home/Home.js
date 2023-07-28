import React from 'react';
import './Home.css';
import { withRouter } from 'react-router';

class Home extends React.Component {

    constructor() {
        super();
    }

    state = {

    }

    render() {
        return(
            <div>
                <b>Hello!</b>
            </div>
        )
    }
}

export default withRouter(Home);