'use strict';

import React from 'react';
import Comment from './Comment';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        };
    }
    render() {
        //throw new Exception("Bad Stuff");
        var commentItems = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                    {comment.id}: {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentItems}
            </div>
        );
    }
}

export default CommentsList;