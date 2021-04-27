import React from 'react';
import Comment from './comment';
import LikesCounter from './likesCounter';


function Post(props) {

  return (
    <li>
      {/* begin timeline-body */}
      <div className="timeline-body">
        <div className="timeline-header">
          {/* TO DO: figure out how to get users profile pics in timeline too */}
          {props?.user?.profilePic &&
            <span className="userimage"><img src={`data:image/jpeg;base64,${props?.user?.profilePic || ''}`} alt="" /></span>
          }
          <div className="post-user-details">
            <div className="username">
              <a href={`/user?username=${props?.user?.username}`}>
                {props?.user?.username || 'user'}
              </a>
            </div>
            <div className="text-muted post-date">
              <small>
                {props?.post?.createdAt?.toDateString()}
              </small>
            </div>
          </div>

        </div>
        <div className="timeline-content">
          <a href={`/post/get/${props?.post?._id}`}>
            <div className="timeline-content__body">
              {props?.post?.body &&
                <p class="text-white">{props?.post?.body || 'post body'}</p>
              }
            </div>
            {props?.post?.image &&
              <img className="post-image" src={`data:image/jpeg;base64,${props?.post?.image || ''}`} alt="" />
            }
          </a>
        </div>

        <div className="timeline-likes">
          <div className="stats-right">
            {/* <span className="stats-text">259 Shares</span> */}

            <span className="stats-text-num">{(props?.post?.comments?.length || 0) + ''}</span>
            <span className="stats-text">Comments</span>
          </div>
          <div className="stats">
            <span className="fa-stack fa-fw stats-icon">
              <i className="fa fa-circle fa-stack-2x text-info" />
              <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
            </span>
            <LikesCounter post={props?.post} />
          </div>
        </div>
        <div className="timeline-footer">

          {/* <a href={`/post/like/${props?.post?._id}`} className="m-r-15 text-inverse-lighter">
            <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3" />Like
          </a> */}
          <form action={`/post/like/${props?.post?._id}`} method="post" className="like-post-form">
            <button type="submit" className="btn btn-secondary m-r-15 text-inverse-lighter like-post-button">
              <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3" />Like
            </button>
          </form>

          <button className="btn btn-secondary m-r-15 text-inverse-lighter comment-button">
            <i className="fa fa-comments fa-fw fa-lg m-r-3" />Comments
          </button>

          {/* <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3" /> Share</a> */}
        </div>

        <div className="timeline-comment-box comment-box" style={{ display: 'none' }}>

          <div className="new-comment">
            <div className="user"><img src={`data:image/jpeg;base64,${props?.currentUser?.profilePic || ''}`} /></div>
            <div className="input">
              <form action={`/post/comment/${props?.post?._id}`} method="POST">
                <div className="input-group">
                  <input type="text" className="form-control rounded-corner" placeholder="Write a comment..." name="comment" />
                  <span className="input-group-btn p-l-10">
                    <button className="btn btn-primary f-s-12 rounded-corner" type="submit">Comment</button>
                  </span>
                </div>
              </form>
            </div>
          </div>

          {props?.post?.comments.map((comment) => (
            <Comment comment={comment} />
          ))}

        </div>

      </div>
      {/* end timeline-body */}
    </li>
  )
}


export default Post;
