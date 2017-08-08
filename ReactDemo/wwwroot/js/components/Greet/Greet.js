'use strict';

import React from 'react';

class Greet extends React.Component {
    render() {
        return (
            <div className="greet">
                Greetings, {this.props.name}!
            </div>
        );
    }
}

export default Greet;