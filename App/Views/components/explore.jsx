import React from 'react';
import UserPanel from './userPanel';


function Explore(props) {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>Explore</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            <div className="profile-content">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <div className="timeline explore-carousel">
                    {props?.randomUsers.map((user) => {

                      if (!user.followers.includes(props.currentUser._id)) {
                        return <UserPanel user={user} follow={'follow'} hideFollowButton={props.hideFollowButton} slick={props?.slick} />
                      }

                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Explore;
