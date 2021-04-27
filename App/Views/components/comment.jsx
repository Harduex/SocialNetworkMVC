import React from 'react';


function Comment(props) {

    let d = props?.comment?.createdAt;
    let dateString = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

    return (
        <div className="comment">
            <br />
            <div className="timeline-header">
                <span className="userimage">
                    <img src={`data:image/jpeg;base64,${props?.comment?.user?.profilePic || ''}`} />
                </span>
                <div className="post-user-details">
                    <div className="username">
                        <a href={`/user?username=${props?.comment?.user?.username}`}>
                            {props?.comment?.user?.username}
                        </a>
                    </div>
                    <div className="text-white post-comment"><small>{props?.comment?.comment}</small></div>
                    <div className="text-muted post-date"><small>{dateString}</small></div>
                </div>
            </div>
        </div>
    )
}


export default Comment;




