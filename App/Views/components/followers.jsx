import React from 'react';
import UserPanel from './userPanel';


function Followers(props) {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            <div className="profile-content">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <ul className="timeline">

                    {props?.followers.map((user) => {

                      if (user.followers.includes(props.currentUser.username)) {
                        return <UserPanel user={user} follow={'unfollow'} hideFollowButton={props.hideFollowButton} />
                      } else {
                        return <UserPanel user={user} follow={'follow'} hideFollowButton={props.hideFollowButton} />
                      }

                    })}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Followers;
