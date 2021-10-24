import React from 'react';


function UserPanel(props) {


  return (
    <div className="container user-panel" id={`user_${props?.user?.username}`}>
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            {/* begin profile */}
            <div className="profile">
              <div className="profile-header">
                {/* BEGIN profile-header-cover */}
                <div className="profile-header-cover dynamic-text-bg-color" style={{ backgroundColor: props?.user?.coverColor }} />
                {/* END profile-header-cover */}
                {/* BEGIN profile-header-content */}
                <div className={props?.slick ? "profile-header-content carousel-view" : "profile-header-content"} >
                  {/* BEGIN profile-header-img */}
                  <div className="profile-header-img">
                    <img src={props?.user?.profilePic?.url} alt="profile image" />
                  </div>
                  {/* END profile-header-img */}
                  {/* BEGIN profile-header-info */}
                  <div className="profile-header-info">
                    <h4 className="m-t-10 m-b-5 user-full-name dynamic-text-color">{props?.user?.fullName || 'user full name'}</h4>
                    <a href={`/user?username=${props?.user?.username}`} className="m-b-10 user-username dynamic-text-color">@{props?.user?.username || 'user'}</a>
                    {props?.slick ?
                      <br />
                      :
                      <p className="m-b-10 user-bio dynamic-text-color">{props?.user?.bio || ''}</p>
                    }
                  </div>
                  {props.loggedIn ?
                    <div className="profile-options">
                      <a href="/profile/edit" className="btn btn-md btn-danger edit-profile-button">
                        <i class="fa fa-lg fa-user-cog text-white"></i>
                      </a>
                    </div>
                    :
                    !props.hideFollowButton && (
                      <div className="profile-options">
                        <form action={`/user/follow/${props?.user?.username}`} method="post" className="follow-user-form">
                          <button type="submit" className="btn btn-sm btn-danger mb-2 follow-user-button">{props?.follow}</button>
                        </form>

                      </div>
                    )
                  }
                  {/* END profile-header-info */}
                </div>
                {/* END profile-header-content */}

              </div>

              {/* BEGIN profile-header-tab */}
              {props?.mainPanel &&
                <div className="profile-header-tab-settings">
                  < ul className="profile-header-tab nav nav-tabs">
                    <li className="nav-item"><a href="#posts" className="nav-link text-white" data-toggle="tab">Posts {(props?.postsCount || 0)}</a></li>
                    <li className="nav-item"><a href="#followers" className="nav-link text-white" data-toggle="tab">Followers {(props?.user?.followers?.length || 0)}</a></li>
                    <li className="nav-item"><a href="#following" className="nav-link text-white" data-toggle="tab">Following {(props?.user?.following?.length || 0)}</a></li>
                  </ul>
                  <div className="gallery-view-toggle">
                    <span className="gallery-view-toggle__label">Gallery</span>
                    <label class="switch">
                      <input type="checkbox" className="toggle-timeline" />
                      <span class="slider round"></span>
                    </label>
                  </div>
                </div>
              }
              {/* END profile-header-tab */}

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}


export default UserPanel;
