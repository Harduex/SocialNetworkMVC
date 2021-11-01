import React from 'react';


function BigButtonPanel(props) {

  return (
    <div className="container mt-4 mb-4">
      <div className="row">
        <div className="col-md-12 p-0">
          <div id="content" className="content content-full-width">
            <div className="profile-content add-post-button">
              <div className="tab-content p-0">
                <div className="tab-pane fade active show" id="profile-post">
                  <div className="timeline">
                    <div className="timeline-body hover-button">
                      {props?.dataTarget || props?.type ?
                        <button type={props?.type || "button"} className="btn btn-secondary btn-lg btn-block" data-toggle="modal" data-target={props?.dataTarget}>
                          {props?.children}
                        </button>
                        :
                        <a href={props?.route} className={`btn btn-secondary btn-lg btn-block ${props.className}`}>
                          {props?.children}
                        </a>
                      }
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


export default BigButtonPanel;
