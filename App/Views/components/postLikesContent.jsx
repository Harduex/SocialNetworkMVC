import React from 'react';
import Layout from '../layouts/layout';
import UserPanel from './userPanel';


function PostPreview(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            <div className="profile-content">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <ul className="timeline">
                    {props?.post.likes.map((user) => (
                      <UserPanel user={user} hideFollowButton={true} />
                    ))}
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




export default PostPreview;
