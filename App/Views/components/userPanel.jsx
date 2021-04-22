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
                    <h4 className="m-t-10 m-b-5">{props?.user?.fullName || 'user full name'}</h4>
                    <p className="m-b-10">{props?.user?.bio || 'user bio'}</p>
                    {/* <p className="m-b-10">{'Followers: ' + (props?.user?.followers?.length || 0)}</p> */}
                    {/* <p className="m-b-10">{'Following: ' + (props?.user?.following?.length || 0)}</p> */}
                    <a href="/profile/edit" className="btn btn-sm btn-primary mb-2">Edit Profile</a>
                  </div>
                  {/* END profile-header-info */}
                </div>
                {/* END profile-header-content */}

                {/* BEGIN profile-header-tab */}
                <ul className="profile-header-tab nav nav-tabs">
                  <li className="nav-item"><a href="#profile-post" className="nav-link" data-toggle="tab">Posts</a></li>
                  <li className="nav-item"><a href="#profile-photos" className="nav-link" data-toggle="tab">Followers</a></li>
                  <li className="nav-item"><a href="#profile-videos" className="nav-link" data-toggle="tab">Following</a></li>
                </ul>
                {/* END profile-header-tab */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default UserPanel;
