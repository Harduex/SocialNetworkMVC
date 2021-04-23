import React from 'react';


function UserPanel(props) {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            {/* begin profile */}
            <div className="profile">
              <div className="profile-header">
                {/* BEGIN profile-header-cover */}
                <div className="profile-header-cover" />
                {/* END profile-header-cover */}
                {/* BEGIN profile-header-content */}
                <div className="profile-header-content">
                  {/* BEGIN profile-header-img */}
                  <div className="profile-header-img">
                    <img src={`data:image/jpeg;base64,${props?.user?.profilePic}`} alt="profile image" />
                  </div>
                  {/* END profile-header-img */}
                  {/* BEGIN profile-header-info */}
                  <div className="profile-header-info">
                    <h4 className="m-t-10 m-b-5 user-full-name">{props?.user?.fullName || 'user full name'}</h4>
                    <a href={`user?username=${props?.user?.username}`} className="m-b-10 text-light user-username">@{props?.user?.username || 'user'}</a>
                    <p className="m-b-10 user-bio">{props?.user?.bio || ''}</p>
                  </div>
                  {props.loggedIn ?
                    <div className="profile-options">
                      <a href="/profile/edit" className="btn btn-md btn-primary edit-profile-button">
                        <i class="fa fa-lg fa-user-cog text-white"></i>
                      </a>
                    </div>
                    :
                    !props.hideFollowButton && (
                      <div className="profile-options">
                        <a href={`/user/follow/${props?.user?.username}`} className="btn btn-sm btn-primary mb-2">{props?.follow}</a>
                      </div>
                    )
                  }
                  {/* END profile-header-info */}
                </div>
                {/* END profile-header-content */}

              </div>

              {/* BEGIN profile-header-tab */}
              {props?.mainPanel &&
                < ul className="profile-header-tab nav nav-tabs">
                  <li className="nav-item"><a href="#posts" className="nav-link text-white" data-toggle="tab">Posts {(props?.posts?.length || 0)}</a></li>
                  <li className="nav-item"><a href="#followers" className="nav-link text-white" data-toggle="tab">Followers {(props?.user?.followers?.length || 0)}</a></li>
                  <li className="nav-item"><a href="#following" className="nav-link text-white" data-toggle="tab">Following {(props?.user?.following?.length || 0)}</a></li>
                </ul>
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
