'use strict';

import React from 'react';

class Text extends React.Component {
    render() {
        return (
            <strong>
                {this.props.text}!
            </strong>
        );
    }
}

export default Text;