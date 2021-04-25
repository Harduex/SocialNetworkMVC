import React from 'react';


function NewPost(props) {
  return (
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="modal fade" id="new-post-modal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="ModalLabel">Create New Post</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                </div>
                <div class="modal-body">
                  <grammarly-extension >
                    <div data-grammarly-part="highlights" >
                      <div>
                        <div >
                          <div ></div>
                          <div ></div>
                        </div>
                      </div>
                    </div>
                    <div data-grammarly-part="button" >
                      <div >
                        <div >
                          <div >
                            <div class="_3-ITD">
                              <div class="_5WizN aN9_b _1QzSN">
                                <div class="_3YmQx">
                                  <div title="Protected by Grammarly" class="_3QdKe">&nbsp;</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </grammarly-extension>
                  <form method="POST" action="post/create" enctype="multipart/form-data" id="create-post-form">
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">Photo:</label>
                      <div className="mt-2">
                        <button className="btn btn-primary change-profile-pic__button" type="button">
                          <i className="fa fa-fw fa-camera" />
                          <span>Choose Photo</span>
                          <input type="file" name="postImage" accept="image/*" className="change-profile-pic__input" />
                        </button>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="body-text" class="col-form-label">Body:</label>
                      <textarea class="form-control" id="body-text" spellcheck="false" name="body"></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-success" form="create-post-form">Publish</button>
                  <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default NewPost;
