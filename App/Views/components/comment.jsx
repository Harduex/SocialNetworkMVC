import React from 'react';


function Comment(props) {

    let d = props?.comment?.createdAt;
    let dateString = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

    return (
        <div className="comment" id={`comment_${props?.comment?._id}`}>
            <br />
            <div className="timeline-header">
                <div>
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

                {props?.comment?.user?.username === props?.currentUser && (
                    <>
                        {/* <div className="edit-post-fields" >
                            <form action={`/post/comment/edit/${props?.comment?._id}`} method="GET" className="edit-post-form d-flex justify-content-between">
                                <input type="text" name="edit-post-id" value={props?.comment?._id} style={{ display: 'none' }} />
                                <span class="text-white" id={`edit-post-${props?.post?._id}-field`}>
                                    <a href={`/post/get/${props?.post?._id}`} className="text-white">
                                        {props?.post?.body || ''}
                                    </a>
                                </span>
                                <button type="submit" className={`btn btn-secondary m-0 p-0 text-inverse-lighter edit-post-toggle`}>
                                    <i className="fa fa-edit fa-fw fa-lg m-r-3" />
                                </button>
                            </form>
                        </div> */}
                        <form action={`/post/comment/delete/${props?.comment?._id}`} method="POST" className="delete-post-comment-form">
                            <input type="text" name="postId" value={props?.post?._id} hidden />
                            <button type="submit" className="btn btn-secondary m-r-15 text-inverse-lighter delete-post-button">
                                <i className="fa fa-times-circle fa-fw fa-lg m-r-3" />
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}


export default Comment;




