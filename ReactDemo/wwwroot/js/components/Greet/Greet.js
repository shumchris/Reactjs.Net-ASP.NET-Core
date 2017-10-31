'use strict';

import React from 'react';
import Text from '../../client-components/Text/Text';

class Greet extends React.Component {
    componentDidCatch(errorString, errorInfo) {
        console.log(errorString, errorInfo);
    }
    render() {
        if (!this.props.name) {
            throw new Exception("No Props");
        }
        return (
            <div className="greet">
                Greetings, {this.props.name}!
                <Text text="Testing" />
            </div>
        );
    }
}

export default Greet;