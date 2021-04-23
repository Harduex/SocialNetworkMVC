import React from 'react';


function NewPostPanel(props) {

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
            <div className="profile-content add-post-button">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <div className="timeline">
                    <div className="timeline-body hover-button">
                      <a href="/post/new" type="button" class="btn btn-secondary btn-lg btn-block">New Post</a>
                    </div>
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


export default NewPostPanel;
