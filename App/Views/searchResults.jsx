import React from 'react';
import Layout from './layouts/layout';
import UserPanel from './components/userPanel';
import BigButtonPanel from './components/bigButtonPanel';
import Timeline from './components/timeline';
import Posts from './components/posts';
import Followers from './components/followers';
import Following from './components/following';


function Profile(props) {

  return (
    <Layout title={props.title}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="content" className="content content-full-width">
              <div className="profile-content">
                <div className="tab-content p-0">
                  <div className="tab-pane fade active show" id="profile-post">
                    <ul className="timeline">

                      {props?.searchResults.map((user) => {

                        if (props.currentUser.username !== user.username) {
                          if (props.currentUser.followers.includes(user._id)) {
                            return <UserPanel user={user} follow={'unfollow'} />
                          } else {
                            return <UserPanel user={user} follow={'follow'} />
                          }
                        } else {
                          return <UserPanel user={user} hideFollowButton loggedIn />
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
    </Layout>
  );
}


export default Profile;
