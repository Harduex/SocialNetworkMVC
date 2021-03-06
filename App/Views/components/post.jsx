import React from 'react';
import Comments from './comments';
import LikesCounter from './likesCounter';


function Post(props) {

  let d = props?.post?.createdAt;
  let dateString = d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes();

  return (
    <li id={`post_${props?.post?._id}`} className={`post-item ${props?.post?.image?.url === '' ? 'hide-post' : ''}`} >
      {/* begin timeline-body */}
      <div className={`timeline-body`}>
        <div className="timeline-header">

          <div className="post-user-details-wrapper">
            {props?.user?.profilePic?.url &&
              <span className="userimage"><img src={props?.user?.profilePic?.url} alt="" /></span>
            }
            <div className="post-user-details">
              <div className="username">
                <a href={`/user?username=${props?.user?.username}`}>
                  {props?.user?.username || 'user'}
                </a>
              </div>
              <div className="text-muted post-date">
                <small>
                  <a href={`/post/get/${props?.post?._id}`} className="text-white">
                    {dateString}
                  </a>
                </small>
              </div>
            </div>
          </div>

          {props.loggedIn && (
            <>
              <form action={`/post/delete/${props?.post?._id}`} method="POST" className="delete-post-form">
                <input type="text" name="image_public_id" value={props?.post?.image?.public_id} hidden />
                <button type="submit" className="btn btn-secondary m-r-15 text-inverse-lighter delete-post-button">
                  <i className="fa fa-times-circle fa-fw fa-lg m-r-3" />
                </button>
              </form>
            </>
          )}
        </div>
        <div className="timeline-content">
          <div className="timeline-content__body">
            {props?.loggedIn && props?.post?.body ?
              <div className="edit-post-fields" >
                <form action={`/post/edit/${props?.post?._id}`} method="GET" className="edit-post-form d-flex justify-content-between">
                  <input type="text" name="edit-post-id" value={props?.post?._id} style={{ display: 'none' }} />
                  <span class="text-white" id={`edit-post-${props?.post?._id}-field`}>
                    <div className="text-white hashtags">
                      <p>{props?.post?.body || ''}</p>
                    </div>
                  </span>
                  <button type="submit" className={`btn btn-secondary m-0 p-0 text-inverse-lighter edit-post-toggle`}>
                    <i className="fa fa-edit fa-fw fa-lg m-r-3" />
                  </button>
                </form>

              </div>
              :
              <>
                <div className="text-white hashtags">
                  <p>{props?.post?.body || ''}</p>
                </div>
              </>
            }
          </div>

          {props?.post?.image?.url &&
            (!!props?.post?.image?.url.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp|svg)$/gi) ?
              <a href={props?.post?.image?.url} data-lightbox="gallery" data-title={props?.post?.body || ''}>
                <img src={props?.post?.image?.url} className="post-image loading" alt="Post Image" />
              </a>
              :
              <video src={props?.post?.image?.url} controls></video>
            )
          }

        </div>

        <div className="timeline-likes">
          <div className="stats-right">
            {/* <span className="stats-text">259 Shares</span> */}

            <span className="stats-text-num post-comments-counter" id={`${props?.post?._id}_comments_counter`}>{(props?.post?.comments?.length || 0)}</span>
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

          <form action={`/post/like/${props?.post?._id}`} method="post" className="like-post-form">
            <button type="submit" className="btn btn-secondary m-r-15 text-inverse-lighter like-post-button">
              <i className="fa fa-thumbs-up fa-fw fa-lg m-r-3" />

              {props?.post?.likes?.includes(props.currentUser._id) ?
                <span>Dislike</span>
                :
                <span>Like</span>
              }
            </button>
          </form>

          <button className="btn btn-secondary m-r-15 text-inverse-lighter comment-button">
            <i className="fa fa-comments fa-fw fa-lg m-r-3" />
            <span className="show-comment-button-text">Comments</span>
          </button>

          {/* <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3" /> Share</a> */}
        </div>

        <div className="timeline-comment-box comment-box" style={{ display: 'none' }}>

          <div className="new-comment">
            <div className="user"><img src={props?.currentUser?.profilePic?.url} /></div>
            <div className="input">
              <form action={`/post/comment/${props?.post?._id}`} method="POST" className="comment-post-form">
                <div className="input-group">
                  <input type="text" className="form-control rounded-corner comment-body-input" placeholder="Write a comment..." name="comment" />
                  <span className="input-group-btn p-l-10">
                    <button className="btn btn-primary f-s-12 rounded-corner post-comment-button" type="submit">
                      <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>

          <Comments post={props?.post} currentUser={props?.currentUser} />

        </div>

      </div>
      {/* end timeline-body */}
    </li>
  )
}


export default Post;
