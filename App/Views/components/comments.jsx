import React from 'react';
import Comment from './comment';


function Comments(props) {
    return (
        <div className="post-comments-list" id={`${props?.post?._id}_comments`}>
            {props?.post?.comments.map((comment) => (
                <Comment post={props?.post} comment={comment} currentUser={props?.currentUser?.username} />
            ))}
        </div>
    )
}


export default Comments;




