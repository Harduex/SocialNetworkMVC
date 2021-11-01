import React from 'react';


const Timeline = (props) => (
  <div className={`container ${props.className || ''}`}>
    <div className="row">
      <div className="col-md-12 p-0">
        <div id="content" className="content content-full-width">
          <div className="profile-content">
            <div className="tab-content p-0">
              <div className="tab-pane fade active show" id="profile-post">
                <ul className="timeline posts-container">
                  {props.children}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)


export default Timeline;
