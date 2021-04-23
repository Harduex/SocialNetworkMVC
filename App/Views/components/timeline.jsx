import React from 'react';
import Post from './post';


function Timeline(props) {


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            <div className="profile-content">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <ul className="timeline">
                    {props?.posts.map((post) => (
                      (props?.feed ?
                        <Post post={post} currentUser={props.currentUser} user={{ username: post.user }} />
                        :
                        <Post post={post} currentUser={props.currentUser} user={props.user} />
                      )
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


export default Timeline;
