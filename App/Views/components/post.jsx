import React from 'react';


function Post(props) {

  return (
    <li>
      {/* begin timeline-time */}
      {/* <div className="timeline-time">
        <span className="date">today</span>
        <span className="time">04:20</span>
      </div> */}
      {/* end timeline-time */}

      {/* begin timeline-icon */}
      <div className="timeline-icon">
        <a href="javascript:;">&nbsp;</a>
      </div>
      {/* end timeline-icon */}

      {/* begin timeline-body */}
      <div className="timeline-body">
        <div className="timeline-header">
          <span className="userimage"><img src={`data:image/jpeg;base64,${props?.usr?.profilePic || ''}`} alt="" /></span>
          <span className="username"><a href="javascript:;">{props?.user || 'user'}</a> <small /></span>
        </div>
        <div className="timeline-content">
          {props?.post?.body &&
            <p class="text-dark">{props?.post?.body || 'post body'}</p>
          }
          {props?.post?.image &&
            <img className="post-image" src={`data:image/jpeg;base64,${props?.post?.image || ''}`} alt="" />
          }
        </div>

        <div className="timeline-likes">
          <div className="stats-right">
            {/* <span className="stats-text">259 Shares</span> */}
            <span className="stats-text">{(props?.post?.comments?.length || 0) + ' Comments'}</span>
          </div>
          <div className="stats">
            <span className="fa-stack fa-fw stats-icon">
              <i className="fa fa-circle fa-stack-2x text-info" />
              <i className="fa fa-thumbs-up fa-stack-1x fa-inverse" />
            </span>
            <span className="stats-total">{props?.post?.likes?.length || 0}</span>
          </div>
        </div>
        <div className="timeline-footer">
          <a href="javascript:;" className="m-r-15 text-inverse-lighter">
            <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3" />Like</a>
          <a href="javascript:;" className="m-r-15 text-inverse-lighter comment-button">
            <i className="fa fa-comments fa-fw fa-lg m-r-3" />Comments
            </a>
          {/* <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3" /> Share</a> */}
        </div>
        <div className="timeline-comment-box comment-box" style={{ display: 'none' }}>
          <div className="user"><img src={`data:image/jpeg;base64,${props?.currentUser?.profilePic || ''}`} /></div>
          <div className="input">
            <form action>
              <div className="input-group">
                <input type="text" className="form-control rounded-corner" placeholder="Write a comment..." />
                <span className="input-group-btn p-l-10">
                  <button className="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* end timeline-body */}
    </li>
  )
}


export default Post;
